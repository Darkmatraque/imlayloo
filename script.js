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

    /* ------------------------------
       MULTILINGUE
    ------------------------------ */

    function loadLanguage(lang) {
        fetch(`lang-${lang}.json`)
            .then(res => res.json())
            .then(data => {

                document.getElementById("title").textContent = data.title;
                document.getElementById("titleTab").textContent = data.titleTab;

                document.getElementById("navHome").textContent = data.navHome;
                document.getElementById("navClips").textContent = data.navClips;
                document.getElementById("navVods").textContent = data.navVods;
                document.getElementById("navSocial").textContent = data.navSocial;
                document.getElementById("navCmd").textContent = data.navCmd;
                document.getElementById("navAbout").textContent = data.navAbout;

                document.getElementById("intro1").textContent = data.intro1;
                document.getElementById("intro2").textContent = data.intro2;
                document.getElementById("intro3").textContent = data.intro3;
                document.getElementById("intro4").textContent = data.intro4;

                document.getElementById("contactTitle").textContent = data.contactTitle;
                document.getElementById("contactText").textContent = data.contactText;

                document.getElementById("helpTitle").textContent = data.helpTitle;
                document.getElementById("helpText").textContent = data.helpText;
                document.getElementById("helpBtnLink").textContent = data.helpBtnLink;
                document.getElementById("close-help").textContent = data.helpClose;
            });
    }

    let currentLang = localStorage.getItem("lang") || "fr";
    loadLanguage(currentLang);

    document.getElementById("lang-fr").addEventListener("click", () => {
        localStorage.setItem("lang", "fr");
        loadLanguage("fr");
    });

    document.getElementById("lang-en").addEventListener("click", () => {
        localStorage.setItem("lang", "en");
        loadLanguage("en");
    });

});
