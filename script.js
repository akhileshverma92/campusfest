document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    
    // Form submission and validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const event = document.getElementById('event').value;

        if (name && email && event) {
            alert(`Thank you for registering, ${name}! You've signed up for the ${event}.`);
            form.reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Back to top button visibility on scroll
    window.onscroll = function() {
        const button = document.getElementById('backToTop');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Scroll to top on button click
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('check');
    const darkModeIconSun = document.getElementById('dark-mode-toggle');
    const darkModeIconMoon = document.getElementById('dark-mode-toggle2');
    const body = document.body;

    // Check for saved user preference for dark mode
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
        darkModeIconSun.classList.add('hidden');
        darkModeIconMoon.classList.remove('hidden');
    }

    // Toggle dark mode on checkbox click
    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeIconSun.classList.add('hidden');
            darkModeIconMoon.classList.remove('hidden');
        } else {
            darkModeIconSun.classList.remove('hidden');
            darkModeIconMoon.classList.add('hidden');
        }
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
