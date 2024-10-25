// Function to validate login credentials
function validateLogin() {
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input values
    if (username === '' || password === '') {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Please fill in all fields';
        document.getElementById('success-message').style.display = 'none';
    } else if (username.length < 3 || username.length > 20) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Username must be between 3 and 20 characters';
        document.getElementById('success-message').style.display = 'none';
    } else if (password.length < 8 || password.length > 30) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Password must be between 8 and 30 characters';
        document.getElementById('success-message').style.display = 'none';
    } else {
        // Login successful, display success message
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('success-message').innerText = 'Login Successful!';
        document.getElementById('error-message').style.display = 'none';

        // Optional: Call API or perform login logic here
        // console.log('Login successful');
    }
}

// Add event listener to login button
document.querySelector('.login-btn').addEventListener('click', validateLogin);
