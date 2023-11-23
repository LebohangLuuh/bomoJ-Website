// validate the form

function validateForm() {
    const nameInput = document.getElementById('nameInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const messageInput = document.getElementById('exampleFormControlTextarea1').value.trim();

    // Regular expression to validate name without numbers
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

    // Regular expression to validate email
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


// for events page

const eventsContainer = document.getElementById('events-container');

// Fetch and display events
function fetchAndDisplayEvents() {
  db.collection('events').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
          <h2>${eventData.event_title}</h2>
          <p>Date: ${eventData.event_date}</p>
          <p>${eventData.event_description}</p>
        `;
        eventsContainer.appendChild(eventElement);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
}

// Call the function when the page loads
window.addEventListener('load', fetchAndDisplayEvents);


// Assuming you have a form with the ID 'eventForm'

const eventForm = document.getElementById('eventForm');

eventForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const eventTitle = document.getElementById('eventTitle').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventDescription = document.getElementById('eventDescription').value;
  const eventImg = document.getElementById('selectedImage')

  // Add the event to Firestore
  db.collection('events').add({
    event_title: eventTitle,
    event_date: eventDate,
    event_description: eventDescription,
    event_Img : eventImg
  })
  .then((docRef) => {
    console.log('Event added with ID: ', docRef.id);
    // You might want to display a success message or redirect the user
  })
  .catch((error) => {
    console.error('Error adding event: ', error);
  });
});
