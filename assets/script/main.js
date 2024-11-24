window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 200) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

const hamburger = document.getElementById("hamburger");
const menuLinks = document.getElementById("menuLinks");

hamburger.addEventListener("click", () => {
    menuLinks.classList.toggle("open"); // Toggle menu visibility
    hamburger.classList.toggle("open"); // Toggle "X" icon
});

const products = document.querySelectorAll('.product');

function scrollAnimation() {
    products.forEach((product) => {
        const rect = product.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                product.classList.add('in-view');
            }, 200);
        }
    });
}

window.addEventListener('scroll', scrollAnimation);
scrollAnimation(); // Initial call in case some elements are already in view

// Open Modal
function openModal() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
