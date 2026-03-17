// Authentication JavaScript for CSP Ready
// This file handles the frontend authentication logic

class CSPReady {
    constructor() {
        this.apiBase = window.location.origin + '/api';
        this.initializeEventListeners();
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

        // Form submissions
        document.getElementById('teacher-login-form')?.addEventListener('submit', (e) => this.handleTeacherLogin(e));
        document.getElementById('teacher-signup-form')?.addEventListener('submit', (e) => this.handleTeacherSignup(e));
        document.getElementById('student-login-form')?.addEventListener('submit', (e) => this.handleStudentLogin(e));
        document.getElementById('student-signup-form')?.addEventListener('submit', (e) => this.handleStudentSignup(e));

        // Class code validation
        document.getElementById('student-class-code')?.addEventListener('input', (e) => this.handleClassCodeInput(e));
        document.getElementById('student-login-class-code')?.addEventListener('input', (e) => this.handleClassCodeInput(e));

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

    // Check username availability
    async checkUsernameAvailability() {
        const username = document.getElementById('student-username').value;
        const classCode = document.getElementById('student-class-code').value;

        if (!username || !classCode || classCode.length !== 6) return;

        try {
            const response = await fetch(`${this.apiBase}/auth/check-username`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, classCode })
            });

            const data = await response.json();

            if (response.ok) {
                if (!data.available) {
                    this.showToast('Username already taken in this class', 'warning');
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
            // Note: In a real implementation, you would use Firebase Auth here
            // This is a simplified version for demonstration
            const response = await fetch(`${this.apiBase}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    isTeacher: true
                })
            });

            const data = await response.json();

            if (response.ok) {
                this.showToast('Login successful!', 'success');
                // Redirect to teacher dashboard
                setTimeout(() => {
                    window.location.href = '/teacher/dashboard';
                }, 1000);
            } else {
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            this.showToast('Login failed. Please try again.', 'error');
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
            const response = await fetch(`${this.apiBase}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    classCode: formData.get('classCode'),
                    username: formData.get('username'),
                    password: formData.get('password'),
                    isTeacher: false
                })
            });

            const data = await response.json();

            if (response.ok) {
                this.showToast('Login successful!', 'success');
                // Redirect to student dashboard
                setTimeout(() => {
                    window.location.href = '/student/dashboard';
                }, 1000);
            } else {
                this.showToast(data.error, 'error');
            }
        } catch (error) {
            this.showToast('Login failed. Please try again.', 'error');
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
                document.getElementById('student-login-class-code').value = formData.get('classCode');
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
    window.cspReady = new CSPReady();
});

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSPReady;
}