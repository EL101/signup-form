let submitButton = document.querySelector('[type="submit"]');
let confirmPasswordInput = document.querySelector('#confirm-password');
let passwordInput = document.querySelector('#password');
submitButton.addEventListener('click', (e) => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity('Error: Passwords don\'t match');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
});