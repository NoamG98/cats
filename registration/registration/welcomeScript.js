document.addEventListener('DOMContentLoaded', function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let loginLogoutButton = document.getElementById('loginLogoutButton');

    if (isLoggedIn === 'true') {
        loginLogoutButton.textContent = 'Logout';
        loginLogoutButton.href = '#';
        loginLogoutButton.addEventListener('click', function() {

            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        });
    } else {
        loginLogoutButton.textContent = 'Login';
        loginLogoutButton.href = 'login.html';
    }
});