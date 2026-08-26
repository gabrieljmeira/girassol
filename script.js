/**
 * Interações visuais e navegação.
 * Carregado no final do DOM (antes do fechamento do body).
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Controle do Menu Mobile ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Fechar menu mobile ao clicar em qualquer link interno
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // --- 2. Comportamento da Navbar Fixa (Scroll) ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('bg-white/95', 'bg-white/98');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('bg-white/98', 'bg-white/95');
            }
        });
    }

    // --- 3. Animações de Scroll Reveal (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => {
            // Se o elemento estiver visível ao carregar a página, anima de imediato
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('active');
            } else {
                revealObserver.observe(el);
            }
        });
    }

});