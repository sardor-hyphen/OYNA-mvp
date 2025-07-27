document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });

    // Animate cards on scroll
    const animateCards = () => {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.85;
            
            if(cardTop < triggerPoint) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * index);
            }
        });
    };

    // Initial animation check
    animateCards();
    window.addEventListener('scroll', animateCards);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(30, 41, 59, 0.98)';
            navbar.style.padding = '0.75rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Preload feature modules in background
    const preloadLinks = () => {
        document.querySelectorAll('.card .btn').forEach(btn => {
            const href = btn.getAttribute('href');
            if (href) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = href;
                document.head.appendChild(link);
            }
        });
    };
    
    // Delay preloading to prioritize critical resources
    setTimeout(preloadLinks, 2000);
    
    // Add hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});
