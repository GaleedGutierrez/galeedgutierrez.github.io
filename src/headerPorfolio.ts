import { objInputRadioType } from "./components/types.js";
import { aProyectsSandwichMenu, inputProyectsSandwichMenu, inputContactSandwichMenu, aContactSandwichMenu, sandwichMenu, menuElementsContainer, optionsMenu, optionsMenuContainer } from "./components/htmlElements.js";

const config = {threshold: 0.2};
const anchorsSandwich = [aProyectsSandwichMenu, aContactSandwichMenu];

const addBrackets = (type: string): void => {
    const objInputs: objInputRadioType = {
        'proyects': () => inputProyectsSandwichMenu.checked = true,
        'contact': () => inputContactSandwichMenu.checked = true,
    };
    objInputs[type]();
};

const observer = new IntersectionObserver( entries  => {
    entries
        .filter(entry => entry.isIntersecting)
        .forEach( entry => {
            const idSection = entry.target.getAttribute('id');
            addBrackets(idSection);
        });
}, config);


anchorsSandwich.forEach( anchor => {
    // debugger
    const hash = anchor.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) observer.observe(target);
});

const showMenu = (): void => {
    menuElementsContainer.classList.toggle('visibleHeaderMenu');
    sandwichMenu.classList.toggle('header__menu-sandwich--active');
};

const hiddeMenu = (): void => {
    menuElementsContainer.classList.remove('visibleHeaderMenu');
    sandwichMenu.classList.remove('header__menu-sandwich--active');
};

const showOptionsMenu = (): void => {
    optionsMenuContainer.classList.toggle('visible-header__options');
    optionsMenu.classList.toggle('header__menu-options-changes--active');
};

const hiddenOptionsMenu = (): void => {
    optionsMenuContainer.classList.remove('visible-header__options');
    optionsMenu.classList.remove('header__menu-options-changes--active');
};

window.addEventListener("resize", () => {
    if (screen.width < 768) hiddenOptionsMenu();
    if (screen.width >= 768) hiddeMenu();
});

aProyectsSandwichMenu.onclick = () => addBrackets('proyects');
aContactSandwichMenu.onclick = () => addBrackets('contact');

sandwichMenu.onclick = () => showMenu();
menuElementsContainer.onclick = () => hiddeMenu();

optionsMenu.onclick = () => showOptionsMenu();
optionsMenuContainer.onclick = () => hiddenOptionsMenu();

