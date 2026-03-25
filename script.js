const btn = document.querySelector('.settings-button');
const menu = document.querySelector('.settings-menu');

btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
