/**
 * Portfolio Main JavaScript
 * Handles scroll animations and interactive effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(10, 10, 12, 0.95)';
        } else {
            nav.style.padding = '1rem 0';
            nav.style.background = 'rgba(10, 10, 12, 0.8)';
        }
    });

    // 3. Smooth Typing Effect Enhancement (Optional CSS-based already, but can be synced)
    // The current CSS typewriter is static, we could make it dynamic here if needed.

    // 4. Form Handling (Simple validation/feedback)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // We use mailto, so we don't preventDefault unless we want to handle via API
            console.log('Form submitted');
        });
    }

    // 5. Magnetic effect for social icons (Subtle touch)
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = icon;
            const centerX = offsetLeft + offsetWidth / 2;
            const centerY = offsetTop + offsetHeight / 2;
            const deltaX = (e.pageX - centerX) / 4;
            const deltaY = (e.pageY - centerY) / 4;
            
            icon.style.transform = `translate(${deltaX}px, ${deltaY}px) translateY(-5px)`;
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
        });
    });
});
