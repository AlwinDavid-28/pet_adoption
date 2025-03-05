document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (role && username && password) {
        if (role === 'admin') {
            // Redirect to Admin Dashboard
            window.location.href = 'admin.html';
        } else if (role === 'user') {
            // Redirect to User Dashboard
            window.location.href = 'index.html';
        } else {
            alert('Please select a valid role.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});
