import { A_PROJECTS_SANDWICH_MENU, INPUT_PROJECTS_SANDWICH_MENU, INPUT_CONTACT_SANDWICH_MENU, A_CONTACT_SANDWICH_MENU, SANDWICH_MENU, MENU_ELEMENTS_CONTAINER, OPTIONS_MENU, OPTIONS_MENU_CONTAINER } from './components/htmlElements.js';
const config = { threshold: 0.2 };
const anchorsSandwich = [A_PROJECTS_SANDWICH_MENU, A_CONTACT_SANDWICH_MENU];
const addBrackets = (type) => {
    const objInputs = {
        projects: () => INPUT_PROJECTS_SANDWICH_MENU.checked = true,
        contact: () => INPUT_CONTACT_SANDWICH_MENU.checked = true,
    };
    objInputs[type]();
};
const observer = new IntersectionObserver(entries => {
    entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
        const idSection = entry.target.getAttribute('id');
        addBrackets(idSection);
    });
}, config);
anchorsSandwich.forEach(anchor => {
    // debugger
    const hash = anchor.getAttribute('href');
    const target = document.querySelector(hash);
    if (target)
        observer.observe(target);
});
const showMenu = () => {
    MENU_ELEMENTS_CONTAINER.classList.toggle('visible-header-menu');
    SANDWICH_MENU.classList.toggle('header__menu-sandwich--active');
};
const hiddenMenu = () => {
    MENU_ELEMENTS_CONTAINER.classList.remove('visible-header-menu');
    SANDWICH_MENU.classList.remove('header__menu-sandwich--active');
};
const showOptionsMenu = () => {
    OPTIONS_MENU_CONTAINER.classList.toggle('visible-header__options');
    OPTIONS_MENU.classList.toggle('header__menu-options-changes--active');
};
const hiddenOptionsMenu = () => {
    OPTIONS_MENU_CONTAINER.classList.remove('visible-header__options');
    OPTIONS_MENU.classList.remove('header__menu-options-changes--active');
};
window.addEventListener('resize', () => {
    if (screen.width < 768)
        hiddenOptionsMenu();
    if (screen.width >= 768)
        hiddenMenu();
});
A_PROJECTS_SANDWICH_MENU.onclick = () => addBrackets('projects');
A_CONTACT_SANDWICH_MENU.onclick = () => addBrackets('contact');
SANDWICH_MENU.onclick = () => showMenu();
MENU_ELEMENTS_CONTAINER.onclick = () => hiddenMenu();
OPTIONS_MENU.onclick = () => showOptionsMenu();
OPTIONS_MENU_CONTAINER.onclick = () => hiddenOptionsMenu();
