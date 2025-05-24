let btn = document.getElementById('btn-more-cards');
let boxMoreCards = document.getElementById('box-more-cards');
let gallerySection = document.getElementById('gallery');

btn.addEventListener('click', () => {
    const isVisible = boxMoreCards.classList.contains('show');

    if (isVisible) {
        // Antes de ocultar, hacemos scroll hacia arriba suavemente
        gallerySection.scrollIntoView({ behavior: 'smooth' });
        
        // Luego de un pequeño retraso, ocultamos las tarjetas
        setTimeout(() => {
            boxMoreCards.classList.remove('show');
        }, 400); // Espera para que el scroll se vea natural
        btn.textContent = 'Ver más';
    } else {
        boxMoreCards.classList.add('show');
        btn.textContent = 'Ver menos';
    }
});
