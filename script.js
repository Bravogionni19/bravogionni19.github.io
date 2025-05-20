// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navUl.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .task, .os-feature');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Form validation for contact page
if (document.querySelector('#contact-form')) {
    const contactForm = document.querySelector('#contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            alert('Per favore compila tutti i campi.');
            return;
        }
        
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Per favore inserisci un indirizzo email valido.');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
        contactForm.reset();
    });
}

// Demo animation for OS interface
if (document.querySelector('.os-interface')) {
    const osInterface = document.querySelector('.os-interface');
    
    // Create app icons
    for (let i = 0; i < 6; i++) {
        const app = document.createElement('div');
        app.className = 'app-icon';
        app.style.left = `${20 + (i % 3) * 25}%`;
        app.style.top = `${20 + Math.floor(i / 3) * 25}%`;
        osInterface.appendChild(app);
    }
    
    // Create menu bar
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    osInterface.appendChild(menuBar);
    
    // Animate apps
    setInterval(() => {
        const apps = document.querySelectorAll('.app-icon');
        apps.forEach(app => {
            app.style.transform = `scale(${1 + Math.random() * 0.2})`;
            app.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        });
    }, 2000);
}