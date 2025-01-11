// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('nav ul');

    mobileNavToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Logo container scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    let lastScroll = 0;
    let scrollThreshold = 50; // Minimum scroll before hiding
    
    // Only run on mobile devices
    const isMobile = () => window.innerWidth <= 768;
    
    window.addEventListener('scroll', () => {
        if (!isMobile()) return;
        
        const currentScroll = window.pageYOffset;
        
        // Determine scroll direction and distance
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Scrolling down
            logoContainer.classList.add('hidden');
        } else {
            // Scrolling up
            logoContainer.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // Reset on resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            logoContainer.classList.remove('hidden');
        }
    });
});