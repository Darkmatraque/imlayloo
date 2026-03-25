document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.settings-button');
    const menu = document.querySelector('.settings-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});

// ----- MODE SOMBRE / CLAIR -----

const modeButton = document.querySelector(".settings-menu a:nth-child(2)");

// Charger le mode sauvegardé
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Clic sur "Mode"
modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Sauvegarde
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// ----- POPUP AIDE -----

const helpButton = document.querySelector(".settings-menu a:first-child");
const helpModal = document.getElementById("help-modal");
const closeHelp = document.getElementById("close-help");

// Ouvrir
helpButton.addEventListener("click", () => {
    helpModal.style.display = "flex";
});

// Fermer
closeHelp.addEventListener("click", () => {
    helpModal.style.display = "none";
});

// Fermer en cliquant autour
helpModal.addEventListener("click", (e) => {
    if (e.target === helpModal) {
        helpModal.style.display = "none";
    }
});
