// JavaScript for Responsive and Feature-Rich Grove Green Organics Website

document.addEventListener('DOMContentLoaded', () => {
    // Responsive Navigation: Toggle visibility of nav-links on mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sticky Header: Change header background on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll-to-Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Product Search Functionality
    const searchBar = document.getElementById('search-bar');
    const productGrid = document.getElementById('product-grid');

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        const products = productGrid.getElementsByClassName('product-card');

        Array.from(products).forEach((product) => {
            const productName = product.getElementsByTagName('p')[0].innerText.toLowerCase();
            if (productName.includes(filter)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
}); 