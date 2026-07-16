// Fonction Mode Sombre avec sauvegarde localStorage
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.querySelector('.mode-toggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    btn.textContent = isDarkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre';
    
    // Sauvegarder la préférence
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Appliquer le mode sombre aux autres éléments
    const header = document.querySelector('header');
    const services = document.querySelector('.services');
    const carouselcontainer = document.querySelectorAll('.carouselcontainer');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (isDarkMode) {
        if (header) header.classList.add('dark-mode');
        if (services) services.classList.add('dark-mode');
        if (carouselcontainer) carouselcontainer.classList.add('dark-mode');
        navLinks.forEach(link => link.style.color = '#fff');
    } else {
        if (header) header.classList.remove('dark-mode');
        if (services) services.classList.remove('dark-mode');
        if (carouselcontainer) carouselcontainer.classList.remove('dark-mode');
        navLinks.forEach(link => link.style.color = '#828181ff');
    }
}

// Charger la préférence au chargement
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        const btn = document.querySelector('.mode-toggle');
        if (btn) btn.textContent = '☀️ Mode Clair';
        
        const header = document.querySelector('header');
        const services = document.querySelector('.services');
        const carouselcontainer = document.querySelector('.carouselcontainer');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        if (header) header.classList.add('dark-mode');
        if (services) services.classList.add('dark-mode');
        if (carouselcontainer) carouselcontainer.classList.add('dark-mode');
        navLinks.forEach(link => link.style.color = '#898989ff');
    }
});

// ========== ANIMATION COMPTEUR ==========

// Fonction pour animer un compteur
function animateCounter(element, target, duration = 2000) {
    const numberElement = element.querySelector('.stat-number');
    if (!numberElement) return;
    
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    // Ajouter l'effet de pulsation
    numberElement.style.animation = 'pulse 0.5s ease';

    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            numberElement.textContent = '+' + target;
            clearInterval(timer);
            // Retirer l'animation après
            setTimeout(() => {
                numberElement.style.animation = '';
            }, 500);
        } else {
            numberElement.textContent = '+' + Math.floor(current);
        }
    }, 16);
}

// Observer pour détecter quand les statistiques sont visibles
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item');
            
            statItems.forEach((item, index) => {
                setTimeout(() => {
                    // Extraire le nombre du texte (ex: "+10" -> 10)
                    const numberText = item.querySelector('.stat-number').textContent;
                    const target = parseInt(numberText.replace('+', ''));
                    
                    // Réinitialiser à 0 avant l'animation
                    item.querySelector('.stat-number').textContent = '+0';
                    
                    // Lancer l'animation avec un délai progressif
                    animateCounter(item, target, 2000);
                }, index * 100);
            });
            
            // Ne plus observer après l'animation
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3 // Déclencher quand 30% de la section est visible
});

// Observer la section des statistiques
window.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});