import { inputHomeSandwichMenu, aHomeSandwichMenu, aAboutSandwichMenu, aProyectsSandwichMenu, inputAboutSandwichMenu, inputProyectsSandwichMenu, inputContactSandwichMenu, aContactSandwichMenu, sandwichMenu, menuElementsContainer } from "./components/htmlElements.js";
const config = { threshold: 0.2 };
const anchorsSandwich = [aHomeSandwichMenu, aAboutSandwichMenu, aProyectsSandwichMenu];
const addBrackets = (type) => {
    const objInputs = {
        'home': () => inputHomeSandwichMenu.checked = true,
        'about': () => inputAboutSandwichMenu.checked = true,
        'proyects': () => inputProyectsSandwichMenu.checked = true,
        // 'resume': () => inputResumeSandwichMenu.checked = true,
        'contact': () => inputContactSandwichMenu.checked = true,
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
    const hash = anchor.getAttribute('href');
    const target = document.querySelector(hash);
    if (target)
        observer.observe(target);
});
const showMenu = () => {
    menuElementsContainer.classList.toggle('visibleHeaderMenu');
    sandwichMenu.classList.toggle('header__menu-sandwich--active');
};
const hiddeMenu = () => {
    menuElementsContainer.classList.remove('visibleHeaderMenu');
    sandwichMenu.classList.remove('header__menu-sandwich--active');
};
aHomeSandwichMenu.onclick = () => addBrackets('home');
aAboutSandwichMenu.onclick = () => addBrackets('about');
aProyectsSandwichMenu.onclick = () => addBrackets('proyects');
aContactSandwichMenu.onclick = () => addBrackets('contact');
sandwichMenu.onclick = () => showMenu();
menuElementsContainer.onclick = () => hiddeMenu();
