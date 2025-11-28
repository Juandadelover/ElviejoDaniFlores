// Animaciones para Flores Daniel Angarita

document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
});

function setupAnimations() {
    // Animaciones de entrada suave
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Animación de fade-in para elementos de la página
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.setProperty('--delay', `${index * 0.1}s`);
        element.classList.add('animate-in');
    });
}

// Animaciones adicionales si es necesario
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .fade-in {
        animation: fadeIn 0.8s ease-out forwards;
        animation-delay: var(--delay, 0s);
    }
`;
document.head.appendChild(style);
