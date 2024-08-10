document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const moreText = button.previousElementSibling.querySelector('.more-text');
            moreText.style.display = moreText.style.display === 'none' ? 'inline' : 'none';
            button.classList.toggle('open');

            if (button.classList.contains('open')) {
                button.textContent = 'Leer menos ▲';
            } else {
                button.textContent = 'Leer más ▼';
            }
        });
    });
});