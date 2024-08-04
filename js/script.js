document.addEventListener("DOMContentLoaded", function() {
    const beritaItems = document.querySelectorAll('.berita-item');

    beritaItems.forEach(item => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transition = 'opacity 2s ease-in-out';
        }, 300);
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'background-color 0.3s ease-in-out, color 0.3s ease-in-out';
        });
    });
});
