// Authentication JavaScript for AP Mastery
// This file handles the frontend authentication logic

class APMastery {
    constructor() {
        this.apiBase = window.location.origin + '/api';
        this.initializeEventListeners();
        this.checkJoinLink();
    }

    // Check for join code in URL
    checkJoinLink() {
        const urlParams = new URLSearchParams(window.location.search);
        const joinCode = urlParams.get('join');
        
        if (joinCode) {
            // Switch to student signup
            this.switchTab('student');
            this.switchStudentForm('signup');
            
            // Fill class code
            const codeInput = document.getElementById('student-class-code');
            if (codeInput) {
                codeInput.value = joinCode.toUpperCase();
                // Trigger validation
                this.validateClassCode(joinCode.toUpperCase());
            }
        }
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Tab switching
        document.getElementById('teacher-tab')?.addEventListener('click', () => this.switchTab('teacher'));
        document.getElementById('student-tab')?.addEventListener('click', () => this.switchTab('student'));

        // Teacher form switching
        document.getElementById('teacher-login-btn')?.addEventListener('click', () => this.switchTeacherForm('login'));
        document.getElementById('teacher-signup-btn')?.addEventListener('click', () => this.switchTeacherForm('signup'));

        // Student form switching
        document.getElementById('student-login-btn')?.addEventListener('click', () => this.switchStudentForm('login'));
        document.getElementById('student-signup-btn')?.addEventListener('click', () => this.switchStudentForm('signup'));

        // Google Auth - Student
        document.getElementById('student-google-login')?.addEventListener('click', () => this.handleGoogleAuth(false, false));
        document.getElementById('student-google-signup')?.addEventListener('click', () => this.handleGoogleAuth(true, false));

        // Google Auth - Teacher
        document.getElementById('teacher-google-login')?.addEventListener('click', () => this.handleGoogleAuth(false, true));
        document.getElementById('teacher-google-signup')?.addEventListener('click', () => this.handleGoogleAuth(true, true));

        // Form submissions
        document.getElementById('teacher-login-form')?.addEventListener('submit', (e) => this.handleTeacherLogin(e));
        document.getElementById('teacher-signup-form')?.addEventListener('submit', (e) => this.handleTeacherSignup(e));
        document.getElementById('student-login-form')?.addEventListener('submit', (e) => this.handleStudentLogin(e));
        document.getElementById('student-signup-form')?.addEventListener('submit', (e) => this.handleStudentSignup(e));

        // Forgot password
        document.getElementById('teacher-forgot-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleForgotPassword(true);
        });
        document.getElementById('student-forgot-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleForgotPassword(false);
        });

        // Class code validation
        document.getElementById('student-class-code')?.addEventListener('input', (e) => this.handleClassCodeInput(e));

        // Username availability checking
        document.getElementById('student-username')?.addEventListener('blur', () => this.checkUsernameAvailability());
    }

    // Switch between teacher and student tabs
    switchTab(type) {
        // Update tab buttons
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.getElementById(`${type}-tab`).classList.add('active');

        // Update form containers
        document.querySelectorAll('.form-container').forEach(container => container.classList.remove('active'));
        document.getElementById(`${type}-forms`).classList.add('active');
    }

    // Switch teacher forms
    switchTeacherForm(type) {
        document.querySelectorAll('#teacher-forms .switch-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`teacher-${type}-btn`).classList.add('active');

        document.querySelectorAll('#teacher-forms .auth-form').forEach(form => form.classList.remove('active'));
        document.getElementById(`teacher-${type}-form`).classList.add('active');
    }

    // Switch student forms
    switchStudentForm(type) {
        document.querySelectorAll('#student-forms .switch-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`student-${type}-btn`).classList.add('active');

        document.querySelectorAll('#student-forms .auth-form').forEach(form => form.classList.remove('active'));
        document.getElementById(`student-${type}-form`).classList.add('active');
    }

    // Handle class code input formatting
    handleClassCodeInput(e) {
        e.target.value = e.target.value.toUpperCase();
        
        // Auto-validate class code if 6 characters
        if (e.target.value.length === 6 && e.target.id === 'student-class-code') {
            this.validateClassCode(e.target.value);
        }
    }

    // Validate class code with backend
    async validateClassCode(classCode) {
        try {
            const response = await fetch(`${this.apiBase}/auth/validate-class-code`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ classCode })
            });

            const data = await response.json();

            if (response.ok) {
                this.showToast(`Valid class: ${data.className}`, 'success');
            } else {
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            console.error('Class code validation error:', error);
        }
    }

    // Check username availability (only on signup form)
    async checkUsernameAvailability() {
        // Only check if the student tab and signup form are both currently active
        const studentForms = document.getElementById('student-forms');
        const signupForm = document.getElementById('student-signup-form');

        if (!studentForms || !studentForms.classList.contains('active')) {
            return;
        }
        if (!signupForm || !signupForm.classList.contains('active')) {
            return;
        }

        const usernameInput = document.getElementById('student-username');
        const username = usernameInput?.value?.trim();

        if (!username) return;

        try {
            const response = await fetch(`${this.apiBase}/auth/check-username`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            });

            const data = await response.json();

            if (response.ok) {
                if (!data.available) {
                    this.showToast('Username already taken. Please choose a different one.', 'warning');
                }
            }
        } catch (error) {
            console.error('Username check error:', error);
        }
    }

    // Handle teacher login
    async handleTeacherLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        this.showLoading();

        try {
            const email = formData.get('email');
            const password = formData.get('password');

            // Sign in with Firebase Auth
            const userCredential = await window.firebaseAuth.signInWithEmailAndPassword(email, password);
            const idToken = await userCredential.user.getIdToken();

            // Verify with backend and get user data
            const response = await fetch(`${this.apiBase}/auth/verify-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${idToken}`
                },
                body: JSON.stringify({ isTeacher: true })
            });

            const data = await response.json();

            if (response.ok) {
                // Store auth data
                localStorage.setItem('authToken', idToken);
                localStorage.setItem('userData', JSON.stringify(data.user));

                this.showToast('Login successful!', 'success');
                setTimeout(() => {
                    window.location.href = '/teacher/dashboard';
                }, 1000);
            } else {
                await window.firebaseAuth.signOut();
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                this.showToast('Invalid email or password', 'error');
            } else {
                this.showToast('Login failed. Please try again.', 'error');
            }
        } finally {
            this.hideLoading();
        }
    }

    // Handle teacher signup
    async handleTeacherSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        this.showLoading();
        
        try {
            const response = await fetch(`${this.apiBase}/auth/teacher-signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    displayName: formData.get('displayName')
                })
            });

            const data = await response.json();

            if (response.ok) {
                this.showToast('Account created successfully!', 'success');
                // Switch to login form
                this.switchTeacherForm('login');
            } else {
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            this.showToast('Signup failed. Please try again.', 'error');
        } finally {
            this.hideLoading();
        }
    }

    // Handle student login
    async handleStudentLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        this.showLoading();

        try {
            const username = formData.get('username');
            const password = formData.get('password');

            // First, get the email from backend by username
            const loginResponse = await fetch(`${this.apiBase}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, isTeacher: false })
            });

            const loginData = await loginResponse.json();

            if (!loginResponse.ok) {
                this.showToast(loginData.error || 'Invalid credentials', 'error');
                return;
            }

            // Sign in with Firebase Auth using the email from backend
            const userCredential = await window.firebaseAuth.signInWithEmailAndPassword(loginData.email, password);
            const idToken = await userCredential.user.getIdToken();

            // Verify with backend and get user data
            const response = await fetch(`${this.apiBase}/auth/verify-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${idToken}`
                },
                body: JSON.stringify({ isTeacher: false })
            });

            const data = await response.json();

            if (response.ok) {
                // Store auth data
                localStorage.setItem('authToken', idToken);
                localStorage.setItem('userData', JSON.stringify(data.user));

                this.showToast('Login successful!', 'success');
                setTimeout(() => {
                    window.location.href = '/student/dashboard';
                }, 1000);
            } else {
                await window.firebaseAuth.signOut();
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                this.showToast('Invalid username or password', 'error');
            } else {
                this.showToast('Login failed. Please try again.', 'error');
            }
        } finally {
            this.hideLoading();
        }
    }

    // Handle student signup
    async handleStudentSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        this.showLoading();
        
        try {
            const response = await fetch(`${this.apiBase}/auth/student-signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    classCode: formData.get('classCode'),
                    displayName: formData.get('displayName'),
                    username: formData.get('username'),
                    password: formData.get('password')
                })
            });

            const data = await response.json();

            if (response.ok) {
                this.showToast(`Successfully joined ${data.className}!`, 'success');
                // Switch to login form
                this.switchStudentForm('login');
                // Pre-fill login form
                document.getElementById('student-login-username').value = formData.get('username');
            } else {
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            this.showToast('Signup failed. Please try again.', 'error');
        } finally {
            this.hideLoading();
        }
    }

    // Handle Google Auth for Students and Teachers
    async handleGoogleAuth(isSignup, isTeacher) {
        let classCode = null;
        if (!isTeacher && isSignup) {
            // Get class code from signup field
            const classCodeInput = document.getElementById('student-class-code');
            
            classCode = classCodeInput?.value?.trim();
            
            if (!classCode) {
                this.showToast('Please enter a class code first', 'warning');
                classCodeInput?.focus();
                return;
            }
            if (classCode.length !== 6) {
                this.showToast('Invalid class code', 'error');
                return;
            }
        }

        this.showLoading();
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await window.firebaseAuth.signInWithPopup(provider);
            const idToken = await result.user.getIdToken();

            const response = await fetch(`${this.apiBase}/auth/google-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    idToken, 
                    classCode,
                    displayName: result.user.displayName,
                    isTeacher
                })
            });

            const data = await response.json();

            if (response.ok) {
                if (data.pendingApproval) {
                    this.showToast(data.message, 'info');
                    await window.firebaseAuth.signOut();
                    this.hideLoading();
                    return;
                }

                // Store auth data
                localStorage.setItem('authToken', idToken);
                localStorage.setItem('userData', JSON.stringify(data.user));

                this.showToast(isSignup ? 'Account created successfully!' : 'Login successful!', 'success');
                setTimeout(() => {
                    window.location.href = isTeacher ? '/teacher/dashboard' : '/student/dashboard';
                }, 1000);
            } else if (response.status === 404 && data.needsSignup && !isTeacher) {
                // Account doesn't exist, prompt for class code if we don't have one
                this.hideLoading();
                const code = prompt(`Welcome ${data.name}! Please enter your 6-character Class Code to join:`);
                if (code && code.trim().length === 6) {
                    await this.handleGoogleAuthWithCode(idToken, code.toUpperCase().trim(), data.name);
                } else if (code) {
                    this.showToast('Please enter a valid 6-character class code', 'error');
                }
            } else {
                this.showToast(data.error || 'Google auth failed', 'error');
                this.hideLoading();
            }
        } catch (error) {
            console.error('Google Auth error:', error);
            this.showToast('Google authentication failed', 'error');
            this.hideLoading();
        }
    }

    // Helper for Google Signup when code is prompted (students only)
    async handleGoogleAuthWithCode(idToken, classCode, displayName) {
        this.showLoading();
        try {
            const response = await fetch(`${this.apiBase}/auth/google-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idToken, classCode, displayName, isTeacher: false })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', idToken);
                localStorage.setItem('userData', JSON.stringify(data.user));
                this.showToast('Account created successfully!', 'success');
                setTimeout(() => { window.location.href = '/student/dashboard'; }, 1000);
            } else {
                this.showToast(data.error || 'Signup failed', 'error');
            }
        } catch (error) {
            this.showToast('Signup failed', 'error');
        } finally {
            this.hideLoading();
        }
    }

    // Handle password reset
    async handleForgotPassword(isTeacher) {
        if (!isTeacher) {
            alert('Students cannot reset passwords directly because they do not have linked emails. Please ask your teacher to reset your password for you from their dashboard.');
            return;
        }

        const inputLabel = 'email';
        const value = prompt(`Please enter your ${inputLabel} to reset your password:`);
        
        if (!value) return;

        this.showLoading();
        try {
            // First, call backend to get the email and validate
            const response = await fetch(`${this.apiBase}/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: value,
                    isTeacher: true
                })
            });

            const data = await response.json();

            if (response.ok && data.email) {
                // Now trigger Firebase password reset email
                await window.firebaseAuth.sendPasswordResetEmail(data.email);
                this.showToast(data.message || 'Password reset email sent!', 'success');
            } else if (response.ok) {
                // If it was a mock success for security
                this.showToast(data.message, 'info');
            } else {
                this.showToast(data.error || 'Failed to process request', 'error');
            }
        } catch (error) {
            console.error('Forgot password error:', error);
            this.showToast('Failed to send reset email. Please try again.', 'error');
        } finally {
            this.hideLoading();
        }
    }

    // Show loading overlay
    showLoading() {
        document.getElementById('loading-overlay').classList.add('active');
    }

    // Hide loading overlay
    hideLoading() {
        document.getElementById('loading-overlay').classList.remove('active');
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        const container = document.getElementById('toast-container');
        container.appendChild(toast);

        // Auto-remove after 4 seconds
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    // Utility method for making authenticated requests (for future use)
    async makeAuthenticatedRequest(endpoint, options = {}) {
        // In a real implementation, you would get the Firebase ID token here
        const token = localStorage.getItem('firebase-token'); // Placeholder

        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        const mergedOptions = { ...defaultOptions, ...options };
        
        return fetch(`${this.apiBase}${endpoint}`, mergedOptions);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.apMastery = new APMastery();
});

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APMastery;
}