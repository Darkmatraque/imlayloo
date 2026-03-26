document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       MENU PARAMÈTRES
    ------------------------------ */
    const btn = document.querySelector('.settings-button');
    const menu = document.querySelector('.settings-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    /* ------------------------------
       POPUP AIDE
    ------------------------------ */
    const helpBtn = document.getElementById("help-btn");
    const helpModal = document.getElementById("help-modal");
    const closeHelp = document.getElementById("close-help");

    if (helpBtn) {
        helpBtn.addEventListener("click", () => {
            helpModal.style.display = "flex";
        });
    }

    if (closeHelp) {
        closeHelp.addEventListener("click", () => {
            helpModal.style.display = "none";
        });
    }

    if (helpModal) {
        helpModal.addEventListener("click", (e) => {
            if (e.target === helpModal) {
                helpModal.style.display = "none";
            }
        });
    }

});
