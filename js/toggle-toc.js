function toggleTOC() {
    const tocList = document.getElementById('toc-list');
    const arrow = document.getElementById('arrow');
    if (tocList.style.display === 'none' || tocList.style.display === '') {
        tocList.style.display = 'block';
        arrow.style.transform = 'rotate(90deg)';
    } else {
        tocList.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

document.querySelectorAll('#toc-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Retirer la classe de surbrillance de tous les éléments
        document.querySelectorAll('.highlight').forEach(el => {
            el.classList.remove('highlight');
        });

        // Ajouter la classe de surbrillance à l'élément cible
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.classList.add('highlight');

        // Faire défiler pour centrer l'élément à l'écran
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Retirer la classe de surbrillance après quelques secondes
        setTimeout(() => {
            targetElement.classList.remove('highlight');
        }, 600);
    });
});