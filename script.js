document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.settings-button');
    const menu = document.querySelector('.settings-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});
