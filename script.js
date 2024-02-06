const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signUpBtn = document.getElementById('sign-up');

function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add('error');
    } else {
        confirmPasswordInput.classList.remove('error');
    }
}
confirmPasswordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('input', validatePassword);