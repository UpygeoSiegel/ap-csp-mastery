// Auth Helper - Handles Firebase authentication with persistent sessions
// Sessions persist for 2 weeks (or until user logs out)

const firebaseConfig = {
    apiKey: "AIzaSyDjfe2zgokw6CAkmdSM7TeLH0VBYYBRhQs",
    authDomain: "ap-csp-mastery.firebaseapp.com",
    projectId: "ap-csp-mastery"
};

// Initialize Firebase if not already initialized
if (!window.firebaseInitialized) {
    firebase.initializeApp(firebaseConfig);
    window.firebaseInitialized = true;
}

window.firebaseAuth = firebase.auth();

// Set persistence to LOCAL - persists across browser sessions until explicit sign out
// This keeps users logged in for extended periods (refresh tokens valid for weeks)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Auth helper object
window.AuthHelper = {
    // Get a fresh auth token (auto-refreshes if needed)
    async getToken() {
        const user = firebase.auth().currentUser;
        if (user) {
            const token = await user.getIdToken(true); // Force refresh
            localStorage.setItem('authToken', token);
            return token;
        }
        return localStorage.getItem('authToken');
    },

    // Check auth state and return user data
    // Returns a promise that resolves when auth state is determined
    checkAuth(options = {}) {
        const { requireAuth = true, allowedRoles = null } = options;

        return new Promise((resolve, reject) => {
            // Set a timeout in case Firebase takes too long
            const timeout = setTimeout(() => {
                // Fall back to localStorage check
                const token = localStorage.getItem('authToken');
                const userData = JSON.parse(localStorage.getItem('userData') || 'null');

                if (!token || !userData) {
                    if (requireAuth) {
                        window.location.href = '/';
                    }
                    reject(new Error('Not authenticated'));
                } else {
                    resolve({ token, userData, fromCache: true });
                }
            }, 3000);

            firebase.auth().onAuthStateChanged(async (user) => {
                clearTimeout(timeout);

                if (user) {
                    try {
                        // Get fresh token
                        const token = await user.getIdToken();
                        localStorage.setItem('authToken', token);

                        const userData = JSON.parse(localStorage.getItem('userData') || '{}');

                        // Check role if required
                        if (allowedRoles && !allowedRoles.includes(userData.role)) {
                            // Don't sign out or redirect here - let the calling code handle it
                            // The user might be logged in with a different role (e.g., teacher vs admin)
                            reject(new Error('Unauthorized role'));
                            return;
                        }

                        resolve({ token, userData, user });
                    } catch (error) {
                        console.error('Error getting token:', error);
                        reject(error);
                    }
                } else {
                    // No user signed in
                    // Don't redirect here - let the calling code handle it
                    // Different pages may want to redirect to different login pages
                    reject(new Error('Not authenticated'));
                }
            });
        });
    },

    // Refresh token periodically (every 50 minutes to stay ahead of 1-hour expiry)
    startTokenRefresh() {
        setInterval(async () => {
            const user = firebase.auth().currentUser;
            if (user) {
                try {
                    const token = await user.getIdToken(true);
                    localStorage.setItem('authToken', token);
                    console.log('Token refreshed');
                } catch (error) {
                    console.error('Token refresh failed:', error);
                }
            }
        }, 50 * 60 * 1000); // 50 minutes
    },

    // Sign out and clear all auth data
    async signOut() {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.error('Sign out error:', error);
        }
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        window.location.href = '/';
    }
};

// Start automatic token refresh
window.AuthHelper.startTokenRefresh();
