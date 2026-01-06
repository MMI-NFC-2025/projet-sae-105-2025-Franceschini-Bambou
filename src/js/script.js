document.addEventListener('DOMContentLoaded', () => {
    // ========== MENU ==========
    /* Recherche les icônes du menu pour l'interaction */
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('#mainNav');
    const closeBtn = document.querySelector('.menu__close-btn');
    const menuLinks = document.querySelectorAll('.menu__link');
    const body = document.body;

    /* Fonction pour basculer le menu entre ouvert et fermé */
    function toggleMenu() {
        /* Vérifie si le menu est déjà ouvert en regardant l'attribut aria-expanded */
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        /* Change l'état de aria-expanded à l'opposé (true devient false, false devient true) */
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        if (isExpanded) {
            /* Si le menu est ouvert, alors, on ajoute l'attribut hidden pour le masquer */
            menu.setAttribute('hidden', '');
            body.classList.remove('menu-open');
        } else {
            /* Si le menu est fermé, alors, on retire l'attribut hidden pour l'afficher */
            menu.removeAttribute('hidden');
            body.classList.add('menu-open');
        }
    }

    /* Fonction pour fermer le menu */
    function closeMenu() {
        /* Défini aria-expanded à false pour indiquer que le menu est fermé */
        menuBtn.setAttribute('aria-expanded', 'false');
        /* Masque le menu en ajoutant l'attribut hidden */
        menu.setAttribute('hidden', '');
        body.classList.remove('menu-open');
    }

    /* Lorsque le bouton du menu est cliqué, le menu s'ouvre */
    menuBtn.addEventListener('click', toggleMenu);
    /* Lorsque le bouton fermer est cliqué, le menu le menu se ferme */
    closeBtn.addEventListener('click', closeMenu);

    /* après le click, le menu se ferme */
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});