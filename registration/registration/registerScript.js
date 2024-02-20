document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (localStorage.getItem(email) || localStorage.getItem(username)) {
        document.getElementById('message').textContent = 'Username or email already exists';
    } else {

        window.location.href = 'login.html';
    }
});

document.getElementById('loginRedirect').addEventListener('click', function() {

    window.location.href = 'login.html';
});
