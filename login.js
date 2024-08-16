function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    const hide = document.querySelector('.pwd');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = ''
        hide.classList.remove('hide-password');
    } else {
        passwordField.type = 'password';
        console.log(hide)
        hide.classList.add('hide-password')
        toggleIcon.textContent = '👁️';
    }
}
