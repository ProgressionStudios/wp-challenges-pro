

const links = document.querySelectorAll('.title-accordion-pro');

links.forEach((link) => {
    link.addEventListener('click', () => {
        link.parentNode.classList.toggle('hide');
    });
});