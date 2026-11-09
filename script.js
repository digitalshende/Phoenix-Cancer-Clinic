// script.js
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

// Optional: Add a simple scroll animation for cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});
// Toggle the main mobile menu (Hamburger icon)
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Handle Mobile Dropdown Toggle ("Cancers We Treat")
    const navLinks = document.getElementById('nav-links');
    
    if (navLinks) {
        navLinks.addEventListener('click', function(e) {
            // Check if the clicked element is the dropdown trigger link
            const dropdownToggle = e.target.closest('.dropdown > a');
            
            // Only run this on screens smaller than 992px
            if (dropdownToggle && window.innerWidth <= 992) {
                e.preventDefault(); // Stop link from navigating
                
                // Find the <ul class="dropdown-menu"> next to the clicked link
                const dropdownMenu = dropdownToggle.nextElementSibling;
                
                // Toggle visibility
                dropdownMenu.classList.toggle('show-mobile');
                
                // Rotate the arrow icon
                const caret = dropdownToggle.querySelector('.fa-caret-down');
                if (caret) {
                    if (dropdownMenu.classList.contains('show-mobile')) {
                        caret.style.transform = 'rotate(180deg)';
                    } else {
                        caret.style.transform = 'rotate(0deg)';
                    }
                    caret.style.transition = 'transform 0.3s ease';
                }
            }
        });
    }
});