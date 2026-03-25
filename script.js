document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.settings-button');
    const menu = document.querySelector('.settings-menu');

    if (!btn || !menu) return; // Sécurité si un élément manque

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});
