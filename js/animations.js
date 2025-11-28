// Animaciones para Flores Daniel Angarita
// DESACTIVADAS: Las animaciones de testimonios han sido removidas

document.addEventListener('DOMContentLoaded', () => {
    // setupAnimations removido - sin animaciones de scroll
});

// Stub function - no animations applied
function setupAnimations() {
    // No animations
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
