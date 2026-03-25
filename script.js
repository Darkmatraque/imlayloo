document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.settings-button');
    const menu = document.querySelector('.settings-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});

// ----- POPUP AIDE -----
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


// ----- MODE SOMBRE / CLAIR -----
document.addEventListener("DOMContentLoaded", () => {

    const switchContainer = document.querySelector(".theme-switch");

    // Charger le mode sauvegardé
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // Clic sur le switch
    if (switchContainer) {
        switchContainer.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            // Sauvegarde
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});

