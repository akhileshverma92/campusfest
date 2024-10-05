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

const checkbox = document.getElementById('check');
const moonIcon = document.getElementById('dark-mode-toggle2')
const sunIcon = document.getElementById('dark-mode-toggle')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
});

window.onload = function() {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
}

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


  document.addEventListener("mousemove", function (e) {
    const follower = document.getElementById("mouseFollower");
    
    // Move the follower div to the mouse position
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
  });
  