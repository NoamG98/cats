document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    let userData = localStorage.getItem(username);

    if (userData) {
        userData = JSON.parse(userData);
        if (password === userData.password) {
           
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'welcome.html';
        } else {
            document.getElementById('message').textContent = 'Incorrect password';
        }
    } else {
        document.getElementById('message').textContent = 'User not found';
    }
});