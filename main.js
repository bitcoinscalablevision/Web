// Dynamic title effect with fireworks
let titleText = "🎆 BSV-BITCOIN SCALABLE VISION 🎆";
let position = 0;
let direction = 1;
let speed = 200;

function scrollTitle() {
    // Create scrolling effect with fireworks
    let displayText = titleText.substring(position) + " " + titleText.substring(0, position);
    document.title = displayText;
    
    // Add random fireworks emoji
    if (Math.random() < 0.3) {
        const fireworks = ['🎆', '✨', '🎇', '💥', '🔥'];
        const randomFirework = fireworks[Math.floor(Math.random() * fireworks.length)];
        document.title = randomFirework + " " + displayText + " " + randomFirework;
    }
    
    // Change direction and speed randomly
    if (Math.random() < 0.1) {
        direction = -direction;
        speed = Math.max(100, Math.min(400, speed + (Math.random() - 0.5) * 100));
    }
    
    position = (position + direction + titleText.length) % titleText.length;
    setTimeout(scrollTitle, speed);
}

// Start the scrolling effect
scrollTitle();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Sticky header functionality
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Add animation to value cards on scroll
const valueCards = document.querySelectorAll('.value-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.2
});

valueCards.forEach(card => {
    observer.observe(card);
});

// Add basic form validation for future forms
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
};

// Initialize any future forms
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
});