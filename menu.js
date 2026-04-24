// 1. Ефект зміни шапки при прокрутці
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(10, 10, 12, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// 2. Логіка кошика
let count = 0;
const cartIcon = document.getElementById('cartIcon');
const cartBadge = document.querySelector('.cart-count');

// Додаємо плавність анімації
if (cartIcon) {
    cartIcon.style.transition = "transform 0.2s ease";

    cartIcon.addEventListener('click', function() {
        count++; 
        cartBadge.textContent = count;
        
        // Анімація "підстрибування"
        cartIcon.style.transform = 'scale(1.3)';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 150);
    });
}

// 3. Обробка пошуку
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('Шукаємо: ' + searchInput.value);
        }
    });
}