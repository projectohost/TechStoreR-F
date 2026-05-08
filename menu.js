// Category filter toggle
document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    });
});

// Wishlist toggle
document.querySelectorAll('.card-wish').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        btn.style.color = icon.classList.contains('fas') ? '#ff3b7a' : '';
        btn.style.borderColor = icon.classList.contains('fas') ? '#ff3b7a' : '';
    });
});

// Add to cart animation
let cartCount = 3;
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart-badge').textContent = cartCount;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = '#4aab6d';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-plus"></i>';
            btn.style.background = '';
        }, 1200);
    });
});