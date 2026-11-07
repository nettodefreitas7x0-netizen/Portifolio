// const ball = document.querySelector('.cursor-ball');

// document.addEventListener('mousemove', (e) => {
//     // Atualiza a posição da bolinha de acordo com X e Y do mouse
//     ball.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
// });

// --- Animação de Scroll (Scroll Reveal) ---
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos que você quer animar ao rolar a página
    const elementsToReveal = document.querySelectorAll(
        '.section-title, .section-subtitle, .card, .portfolio-card, .cta-content, .hero-content'
    );

    // Adiciona a classe base 'reveal' em todos eles automaticamente
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });

    // Configuração do Observador
    const revealOptions = {
        root: null, // usa a janela do navegador
        rootMargin: '0px',
        threshold: 0.10 // A animação dispara quando 15% do elemento estiver visível
    };

    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: se quiser que a animação aconteça apenas uma vez, descomente a linha abaixo:
                // observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    // Coloca cada elemento sob observação
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });
});
///////////////////////////////////////////////

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav-menu');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
        // Esconder ao rolar para baixo / Mostrar ao rolar para cima
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        // Estilização/Sombra no scroll
        if (scrollTop > 100) {
            header.style.margin = '0.5rem';
                 
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
      
        } else {
            header.style.margin = '0.5rem';
        
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelectorAll('.logo-menu')

    // Abrir/fechar menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
              document.body.style.overflow = '';
         
        });
    });
// ao clicar na logo tbm fecha o menu-nav
      logo.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if ( !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

});