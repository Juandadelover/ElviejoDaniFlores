
class FloresDanielAngarita {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.user = this.loadUserData();
        this.init();
    }

    init() {
        console.log('🌸 Bienvenido a Flores Daniel Angarita - Especialistas en flores frescas');

        this.setupEventListeners();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupPageAnimations();
        this.loadPageSpecificFeatures();

    }

    getValidImageUrl(imagenPath, nombreProducto, categoria) {
        if (!imagenPath) {
            return this.generatePlaceholderImage(nombreProducto, categoria);
        }

        return imagenPath;
    }

    generatePlaceholderImage(nombre, categoria) {
        const coloresCategoria = {
            'rosas': '#E91E63',
            'claveles': '#FF5722',
            'girasoles': '#FFEB3B',
            'tulipanes': '#9C27B0',
            'ornamentales': '#4CAF50',
            'lirios': '#FFFFFF',
            'crisantemos': '#FF9800',
            'alcatraces': '#607D8B'
        };

        const color = coloresCategoria[categoria] || '#9BBFBF';
        const texto = encodeURIComponent(nombre.substring(0, 20));
        const categoriaTexto = encodeURIComponent(categoria);

        return `https://via.placeholder.com/200x280?text=${texto}&bg=${color.replace('#', '')}&textColor=fff`;
    }

    setupEventListeners() {

        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-action="quick-view"]')) {
                e.preventDefault();
                const productId = e.target.closest('[data-product-id]').dataset.productId;
                this.showQuickView(productId);
            }
        });

        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
    }

    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileToggle && navMenu) {

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });

            const menuLinks = navMenu.querySelectorAll('a');
            menuLinks.forEach((link, index) => {
                link.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextIndex = (index + 1) % menuLinks.length;
                        menuLinks[nextIndex].focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevIndex = index === 0 ? menuLinks.length - 1 : index - 1;
                        menuLinks[prevIndex].focus();
                    }
                });
            });
        }
    }

    toggleMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!mobileToggle || !navMenu) return;

        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        mobileToggle.classList.add('active');
        document.body.style.overflow = 'hidden';

        const firstLink = navMenu.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }

        const closeOnOutsideClick = (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                this.closeMobileMenu();
                document.removeEventListener('click', closeOnOutsideClick);
            }
        };
        setTimeout(() => document.addEventListener('click', closeOnOutsideClick), 10);
    }

    closeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';

        mobileToggle.focus();
    }

    setupB2BFeatures() {

        this.checkMayoristaStatus();

        this.setupVolumeDiscounts();

        this.setupInventoryAlerts();
    }

    checkMayoristaStatus() {

        this.user.tier = 'regular';
    }

    setupVolumeDiscounts() {
        this.volumeDiscounts = {
            10: 0.05,   
            25: 0.10,   
            50: 0.15,   
            100: 0.20   
        };
    }

    calculateVolumeDiscount(quantity, basePrice) {
        let discount = 0;
        for (const [minQty, discountRate] of Object.entries(this.volumeDiscounts)) {
            if (quantity >= parseInt(minQty)) {
                discount = discountRate;
            }
        }

        if (this.user.tier === 'premium') {
            discount += 0.05;
        } else if (this.user.tier === 'gold') {
            discount += 0.03;
        }

        return {
            discountRate: discount,
            discountedPrice: basePrice * (1 - discount),
            savings: basePrice * discount * quantity
        };
    }

    loadUserData() {
        try {
            return JSON.parse(localStorage.getItem('daniel_flores_user')) || {
                name: '',
                email: '',
                phone: '',
                company: '',
                tier: 'regular'
            };
        } catch {
            return {
                name: '',
                email: '',
                phone: '',
                company: '',
                tier: 'regular'
            };
        }
    }

    saveUserData(userData) {
        localStorage.setItem('daniel_flores_user', JSON.stringify(userData));
        this.user = userData;
    }

    getCurrentPage() {
        return window.location.pathname.split('/').pop() || 'index.html';
    }

    setupScrollEffects() {
        this.setupScrollAnimations();
        this.setupHeaderScrollEffect();
        this.setupParallaxEffects();
        this.setupHoverEffects();
    }

    setupScrollAnimations() {
        // Animaciones de scroll desactivadas
        // Las tarjetas de testimonios no deben animarse
        return;
    }

    setupHeaderScrollEffect() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        let lastScrollTop = 0;
        let ticking = false;

        const updateHeader = () => {
            const scrollTop = window.pageYOffset;

            if (Math.abs(lastScrollTop - scrollTop) <= 5) {
                ticking = false;
                return;
            }

            if (scrollTop > 100) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }

            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-image img, .hero-text');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate * 0.1}px)`;
            });
        });
    }

    setupHoverEffects() {

        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createHoverEffect(e.target);
            });

            card.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect(e.target);
            });
        });

        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.createButtonHoverEffect(e.target);
            });

            button.addEventListener('mouseleave', (e) => {
                this.removeButtonHoverEffect(e.target);
            });
        });

        const menuItems = document.querySelectorAll('.nav-menu li a');
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                this.createMenuHoverEffect(e.target);
            });

            item.addEventListener('mouseleave', (e) => {
                this.removeMenuHoverEffect(e.target);
            });
        });
    }

    createHoverEffect(element) {
        element.style.transform = 'translateY(-8px) scale(1.02)';
        element.style.boxShadow = '0 12px 32px rgba(90, 78, 166, 0.2)';

        const image = element.querySelector('.product-image img');
        if (image) {
            image.style.animation = 'movimientoPetalo 2s ease-in-out infinite';
        }
    }

    removeHoverEffect(element) {
        element.style.transform = '';
        element.style.boxShadow = '';

        const image = element.querySelector('.product-image img');
        if (image) {
            image.style.animation = '';
        }
    }

    createButtonHoverEffect(button) {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 8px 24px rgba(90, 78, 166, 0.3)';
    }

    removeButtonHoverEffect(button) {
        button.style.transform = '';
        button.style.boxShadow = '';
    }

    createMenuHoverEffect(item) {
        item.style.transform = 'translateY(-1px)';
        item.style.color = 'var(--color-tierra-humeda)';
    }

    removeMenuHoverEffect(item) {
        item.style.transform = '';
        item.style.color = '';
    }

    createMicroInteraction(element, type = 'pulse') {
        const animations = {
            pulse: 'scale(1.05)',
            bounce: 'translateY(-5px)',
            shake: 'translateX(-2px)',
            glow: 'filter: brightness(1.1)'
        };

        element.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.transform = animations[type] || animations.pulse;

        setTimeout(() => {
            element.style.transform = '';
        }, 300);
    }

    animateStaggered(elements, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, index * delay);
        });
    }

    animateElementIn(element, animation = 'fadeInUp') {
        element.style.opacity = '0';
        element.style.animation = `${animation} 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards`;
    }

    setupReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {

            document.documentElement.style.setProperty('--transicion-corta', '0.01ms');
            document.documentElement.style.setProperty('--transicion-media', '0.01ms');
            document.documentElement.style.setProperty('--transicion-larga', '0.01ms');

            const animatedElements = document.querySelectorAll('[style*="animation"]');
            animatedElements.forEach(element => {
                element.style.animation = 'none';
            });
        }
    }

    setupLoadingAnimations() {

        const loadingButtons = document.querySelectorAll('.btn.loading');
        loadingButtons.forEach(button => {
            button.innerHTML = '<span class="loading-spinner"></span> Procesando...';
        });

        this.animateStaggered(document.querySelectorAll('.product-card'), 150);
    }

    createVisualFeedback(element, type = 'success') {
        const feedbackClasses = {
            success: 'success-bounce',
            error: 'error-shake',
            loading: 'loading-spinner',
            pulse: 'animate-pulse'
        };

        const feedbackClass = feedbackClasses[type];
        if (feedbackClass) {
            element.classList.add(feedbackClass);
            setTimeout(() => {
                element.classList.remove(feedbackClass);
            }, 1000);
        }
    }

    enhanceButtonInteractions() {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('mousedown', () => {
                button.style.transform = 'scale(0.98)';
            });

            button.addEventListener('mouseup', () => {
                button.style.transform = 'scale(1)';
                this.createVisualFeedback(button, 'pulse');
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });
        });
    }

    setupPageAnimations() {

        document.body.classList.add('page-transition');

        window.addEventListener('load', () => {
            this.setupLoadingAnimations();
            this.enhanceButtonInteractions();
            this.setupReducedMotion();
        });

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupWhatsAppFloat() {
        const whatsappFloat = document.getElementById('whatsapp-float');
        if (!whatsappFloat) return;

        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > lastScrollTop && scrollTop > 200) {

                whatsappFloat.classList.add('hidden');
            } else {

                whatsappFloat.classList.remove('hidden');
            }

            lastScrollTop = scrollTop;
        });

        setInterval(() => {
            whatsappFloat.classList.add('pulse');
            setTimeout(() => whatsappFloat.classList.remove('pulse'), 1000);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.floresDaniel = new FloresDanielAngarita();
});


