const menuToggle = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectedEvent = document.getElementById('event').value;

    if (name && email) {
        const formData = { name, email, event: selectedEvent };
        console.log('Form data:', formData);  
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message=="success") {
                alert(`Registration successful, ${name}!`);
                document.getElementById('registration-form').reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});
