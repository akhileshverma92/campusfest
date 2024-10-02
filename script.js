const menuToggle = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

const scrollLinks = document.querySelectorAll('.navbar-menu a');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you for registering, ${name}!`);
    } else {
        alert('Please fill out all fields.');
    }
});

 // Function to smooth scroll to a section
 function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      // Scroll into view with smooth behavior
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event listeners for navbar links
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor click behavior
      const target = this.getAttribute('href'); // Get the target section ID
      smoothScroll(target); // Call the smooth scroll function
    });
  });