document.addEventListener('DOMContentLoaded', () => {
});

function setupAnimations() {
}

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
