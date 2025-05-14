let btn = document.getElementById('btn-more-cards');
let boxMoreCards = document.getElementById('box-more-cards');

btn.addEventListener('click', () => {
    boxMoreCards.classList.toggle('show');

    if (boxMoreCards.classList.contains('show')) {
        btn.textContent = 'Ver menos';
    } else {
        btn.textContent = 'Ver más';
    }
});
