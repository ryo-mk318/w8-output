const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password')
const signIn = document.querySelector('#submit');

window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        inputEmail.value = savedEmail;
    }
    if (savedPassword) {
        inputPassword.value = savedPassword;
    }
});

signIn.addEventListener('click', () => {
    const inputData = inputEmail.value;
    localStorage.setItem
        ('email', inputData);
});

signIn.addEventListener('click', () => {
    const inputData = inputPassword.value;
    localStorage.setItem
        ('password', inputData);
});