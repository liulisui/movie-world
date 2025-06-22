
document.addEventListener('DOMContentLoaded', function () {
     
    initLoginForm();

     
    initPasswordToggle();

     
    if (document.getElementById('register-form')) {
        setupPasswordStrength();
        setupPasswordVisibility();
        initRegisterForm();
    }

     
    updateLoginUI();
});


function initLoginForm() {
    const loginForm = document.getElementById('login-form');

    if (!loginForm) return;

     
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

     
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

     
    if (emailInput && emailError) {
        emailInput.addEventListener('input', function () {
            validateEmail(this.value, emailError);
        });

        emailInput.addEventListener('blur', function () {
            validateEmail(this.value, emailError, true);
        });
    }

    if (passwordInput && passwordError) {
        passwordInput.addEventListener('input', function () {
            validatePassword(this.value, passwordError);
        });

        passwordInput.addEventListener('blur', function () {
            validatePassword(this.value, passwordError, true);
        });
    }

     
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

         
        const email = emailInput ? emailInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value : '';

         
        let isValid = true;

        if (emailInput && emailError) {
            isValid = validateEmail(email, emailError, true) && isValid;
        }

        if (passwordInput && passwordError) {
            isValid = validatePassword(password, passwordError, true) && isValid;
        }

         
        if (isValid) {
             
            if (email === 'admin@123.com' && password === '123456') {
                 
                const submitBtn = loginForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 登录中...';

                 
                setTimeout(() => {
                     
                    showLoginMessage(true, '登录成功！即将跳转到首页...');

                     
                    simulateLogin(email);

                     
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                }, 1000);
            } else {
                 
                showLoginMessage(false, '用户名或密码错误');
            }
        }
    });
}


function validateEmail(email, errorElement, showError = false) {
     
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        if (showError) {
            errorElement.textContent = '请输入邮箱地址';
            errorElement.style.display = 'block';
            errorElement.parentElement.classList.add('error');
        }
        return false;
    } else if (!emailRegex.test(email)) {
        if (showError) {
            errorElement.textContent = '请输入有效的邮箱地址';
            errorElement.style.display = 'block';
            errorElement.parentElement.classList.add('error');
        }
        return false;
    } else {
        errorElement.style.display = 'none';
        errorElement.parentElement.classList.remove('error');
        return true;
    }
}


function validatePassword(password, errorElement, showError = false) {
    if (!password) {
        if (showError) {
            errorElement.textContent = '请输入密码';
            errorElement.style.display = 'block';
            errorElement.parentElement.classList.add('error');
        }
        return false;
    } else {
        errorElement.style.display = 'none';
        errorElement.parentElement.classList.remove('error');
        return true;
    }
}


function simulateLogin(email) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('loginTime', new Date().toISOString());
}

function initPasswordToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-password');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
             
            const formGroup = this.closest('.form-group');
            const passwordInput = formGroup.querySelector('input[type="password"]') ||
                formGroup.querySelector('input[type="text"]');

            if (passwordInput) {
                 
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                 
                const icon = this.querySelector('i');
                if (icon) {
                    if (type === 'password') {
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    } else {
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    }
                }
            }
        });
    });
}


function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}


function getCurrentUserName() {
    const email = localStorage.getItem('userEmail') || '';
     
    return email.split('@')[0] || '';
}


function logout() {
     
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginTime');

     
    updateLoginUI();

     
    const currentPage = window.location.pathname;
    if (currentPage.includes('profile.html') || currentPage.includes('dashboard.html')) {
        window.location.href = 'index.html';
    }
}


function updateLoginUI() {
    const userMenu = document.querySelector('.user-menu');
    if (!userMenu) return;

    const loggedIn = isLoggedIn();
    const userName = getCurrentUserName();

    if (loggedIn) {
         
        userMenu.innerHTML = `
            <div class="user-info" style="display: flex; align-items: center; margin-right: 10px;">
                <i class="fas fa-user-circle" style="font-size: 18px; margin-right: 5px; color: var(--primary-color);"></i>
                <span class="user-name" style="font-weight: 600;">${userName}</span>
            </div>
            <a href="#" id="logout-btn" class="btn btn-danger" style="background-color: #d9534f; border-color: #d43f3a; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center;"><i class="fas fa-sign-out-alt" style="margin-right: 5px;"></i> 退出登录</a>
        `;

         
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                logout();
            });
        }
    } else {
         
        userMenu.innerHTML = `
            <a href="login.html" class="btn btn-primary">登录</a>
            <a href="register.html" class="btn">注册</a>
        `;
    }
}


function showLoginMessage(isSuccess, message) {
    const loginForm = document.getElementById('login-form');
    const messageContainer = document.getElementById('login-message');

    if (!loginForm || !messageContainer) return;

     
    messageContainer.className = isSuccess ? 'message success' : 'message error';
    messageContainer.innerHTML = message;
    messageContainer.style.display = 'block';

     
    if (isSuccess) {
        loginForm.style.display = 'none';
    }

     
    if (!isSuccess) {
        setTimeout(() => {
            messageContainer.style.display = 'none';
             
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = '登录';
            }
        }, 3000);
    }
}


function setupPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.getElementById('password-strength');
    const strengthText = document.getElementById('strength-text');

    if (!passwordInput || !strengthIndicator || !strengthText) return;

    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const strength = calculatePasswordStrength(password);

         
        strengthIndicator.className = 'password-strength-meter';
        strengthText.className = 'strength-text';

        if (password.length === 0) {
            strengthIndicator.classList.add('empty');
            strengthText.textContent = '';
            strengthText.classList.add('empty');
        } else if (strength < 30) {
            strengthIndicator.classList.add('weak');
            strengthText.textContent = '弱';
            strengthText.classList.add('weak');
        } else if (strength < 60) {
            strengthIndicator.classList.add('medium');
            strengthText.textContent = '中';
            strengthText.classList.add('medium');
        } else {
            strengthIndicator.classList.add('strong');
            strengthText.textContent = '强';
            strengthText.classList.add('strong');
        }

         
        strengthIndicator.style.width = `${Math.min(100, strength)}%`;
    });

    function calculatePasswordStrength(password) {
        if (!password) return 0;

        let score = 0;

         
        score += Math.min(password.length * 5, 30);

         
        if (/\d/.test(password)) score += 10;

         
        if (/[a-z]/.test(password)) score += 10;

         
        if (/[A-Z]/.test(password)) score += 15;

         
        if (/[^A-Za-z0-9]/.test(password)) score += 15;

         
        const types = [/\d/, /[a-z]/, /[A-Z]/, /[^A-Za-z0-9]/];
        const typesCount = types.filter(type => type.test(password)).length;
        score += (typesCount - 1) * 5;

        return score;
    }
}


function setupPasswordVisibility() {
    const toggleBtns = document.querySelectorAll('.toggle-password');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const inputField = this.previousElementSibling;
            const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
            inputField.setAttribute('type', type);

             
            const icon = this.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
                this.setAttribute('title', '隐藏密码');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
                this.setAttribute('title', '显示密码');
            }
        });
    });
}


function initRegisterForm() {
    const registerForm = document.getElementById('register-form');

    if (!registerForm) return;

     
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

         
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

         
        let isValid = true;

         
        if (!username) {
            showFieldError('username', '请输入用户名');
            isValid = false;
        } else {
            clearFieldError('username');
        }

         
        if (!validateEmail(email, document.getElementById('email-error'), true)) {
            isValid = false;
        }

         
        if (!password) {
            showFieldError('password', '请输入密码');
            isValid = false;
        } else {
            clearFieldError('password');
        }

         
        if (password !== confirmPassword) {
            showFieldError('confirm-password', '两次输入的密码不一致');
            isValid = false;
        } else {
            clearFieldError('confirm-password');
        }

         
        if (isValid) {
             
            const submitBtn = registerForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 注册中...';

             
            setTimeout(() => {
                 
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', username);
                localStorage.setItem('loginTime', new Date().toISOString());

                 
                showRegisterMessage(true, '注册成功！即将跳转到首页...');

                 
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
        }
    });
}


function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.parentElement.classList.add('error');
    }
}


function clearFieldError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.style.display = 'none';
        errorElement.parentElement.classList.remove('error');
    }
}


function showRegisterMessage(isSuccess, message) {
    const messageContainer = document.getElementById('register-message');
    const registerForm = document.getElementById('register-form');

    if (!messageContainer || !registerForm) return;

    messageContainer.className = isSuccess ? 'message success' : 'message error';
    messageContainer.innerHTML = message;
    messageContainer.style.display = 'block';

     
    if (isSuccess) {
        registerForm.style.display = 'none';
    }

     
    if (!isSuccess) {
        setTimeout(() => {
            messageContainer.style.display = 'none';
             
            const submitBtn = registerForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = '创建账号';
            }
        }, 3000);
    }
} 