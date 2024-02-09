// validate the form

function validateForm() {
    const nameInput = document.getElementById('nameInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const messageInput = document.getElementById('exampleFormControlTextarea1').value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const validNameLength = nameInput.length >= 3 && nameInput.length <= 50;

    if (!nameRegex.test(nameInput) || !validNameLength) {
        document.getElementById('nameError').textContent = 'Invalid name format or length.';
        document.getElementById('emailError').textContent = '';
        alert('Invalid name format or length.');
        return false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Regular expression 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        alert('Please enter the valid email format.');
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (messageInput === '') {
        alert('Please ensure that your message is not empty.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}



document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Retrieve username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate the credentials (this is a basic example)
  if (username === 'BOMOJAY' && password === 'BOMOJ@Y') {
  
    window.location.href = 'adminPage.html';
  } else {
    
    alert('Invalid username or password. Please try again.');
  }
});