document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU MENU MOBILE (HAMBURGER)
    const hamburger = document.querySelector('#hamburger');
    const navLinks = document.querySelector('#navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Animation des barres du hamburger (optionnel)
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
        });
    }

    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // 2. ANIMATION AU SCROLL (Intersection Observer)
    // C'est ce qui active ta classe .reveal du CSS
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 }); // Se déclenche quand 15% de l'élément est visible

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. ANIMATION DES BARRES DE COMPÉTENCES
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
});

// 4. GESTION DU FORMULAIRE DE CONTACT
function handleSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('.form-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = "Envoi en cours... ⏳";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    // Simulation d'envoi (À remplacer par un vrai service comme Formspree)
    setTimeout(() => {
        alert("Merci Birane ! Votre message a été envoyé avec succès.");
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "all";
        event.target.reset();
    }, 1500);
}