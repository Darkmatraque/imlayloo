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

    if (helpBtn && helpModal) {
        helpBtn.addEventListener("click", () => {
            helpModal.style.display = "flex";
        });
    }

    if (closeHelp && helpModal) {
        closeHelp.addEventListener("click", () => {
            helpModal.style.display = "none";
        });

        helpModal.addEventListener("click", (e) => {
            if (e.target === helpModal) {
                helpModal.style.display = "none";
            }
        });
    }

    /* ------------------------------
       MULTILINGUE
    ------------------------------ */

    function setText(id, value) {
        const el = document.getElementById(id);
        if (el && value !== undefined) {
            el.textContent = value;
        }
    }

    function loadLanguage(lang) {
        fetch(`lang-${lang}.json`)
            .then(res => res.json())
            .then(data => {

                // TITRE ONGLET + TITRE PAGE
                setText("titleTab", data.titleTab);
                setText("title", data.title);

                // NAVIGATION
                setText("navHome", data.navHome);
                setText("navClips", data.navClips);
                setText("navVods", data.navVods);
                setText("navSocial", data.navSocial);
                setText("navCmd", data.navCmd);
                setText("navAbout", data.navAbout);

                // PAGE ACCUEIL
                setText("homeTitle", data.homeTitle);
                setText("homeText", data.homeText);

                // PAGE CLIPS
                setText("clipsTitle", data.clipsTitle);
                setText("clipsText", data.clipsText);

                // PAGE REDIFFUSIONS
                setText("vodsTitle", data.vodsTitle);
                setText("vodsText", data.vodsText);

                // PAGE RÉSEAUX
                setText("socialTitle", data.socialTitle);
                setText("socialText", data.socialText);

                // PAGE COMMANDES
                setText("cmdTitle", data.cmdTitle);
                setText("cmdText", data.cmdText);

                // PAGE À PROPOS
                setText("intro1", data.intro1);
                setText("intro2", data.intro2);
                setText("intro3", data.intro3);
                setText("intro4", data.intro4);
                setText("contactTitle", data.contactTitle);
                setText("contactText", data.contactText);

                // POPUP AIDE
                setText("helpTitle", data.helpTitle);
                setText("helpText", data.helpText);
                setText("helpBtnLink", data.helpBtnLink);
                setText("close-help", data.helpClose);
            })
            .catch(err => {
                console.error("Erreur chargement langue :", err);
            });
    }

    let currentLang = localStorage.getItem("lang") || "fr";
    loadLanguage(currentLang);

    const btnFr = document.getElementById("lang-fr");
    const btnEn = document.getElementById("lang-en");

    if (btnFr) {
        btnFr.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("lang", "fr");
            loadLanguage("fr");
        });
    }

    if (btnEn) {
        btnEn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("lang", "en");
            loadLanguage("en");
        });
    }

});

