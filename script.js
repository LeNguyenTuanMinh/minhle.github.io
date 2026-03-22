console.log("Portfolio loaded successfully!");

// Simple smooth scroll reveal effect or interactive element
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});
