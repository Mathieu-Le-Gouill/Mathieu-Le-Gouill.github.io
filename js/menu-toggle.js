function openMenu() {
    document.getElementById("menu-overlay").style.width = "25rem";
    document.body.classList.add('blur');
    document.addEventListener('click', outsideClickListener);
}

function closeMenu() {
    document.getElementById("menu-overlay").style.width = "0";
    document.body.classList.remove('blur');
    document.removeEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
    const overlay = document.getElementById("menu-overlay");
    if (!overlay.contains(event.target) && event.target.id !== 'menu-toggle-button') {
        closeMenu();
    }
}
