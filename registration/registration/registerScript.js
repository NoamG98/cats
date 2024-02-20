document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    if (localStorage.getItem(email) || localStorage.getItem(username)) {
        document.getElementById('message').textContent = 'Username or email already exists';
    } else {

        window.location.href = 'login.html';
    }
});

document.getElementById('loginRedirect').addEventListener('click', function() {

    window.location.href = 'login.html';
});
