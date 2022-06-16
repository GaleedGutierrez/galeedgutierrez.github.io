import { objInputRadioType } from "./components/types.js";
import { inputHomeSandwichMenu, aHomeSandwichMenu, aAboutSandwichMenu, aProyectsSandwichMenu, inputAboutSandwichMenu, inputProyectsSandwichMenu, inputContactSandwichMenu, aContactSandwichMenu, sandwichMenu, menuElementsContainer, optionsMenu, optionsMenuContainer } from "./components/htmlElements.js";

const config = {threshold: 0.2};
const anchorsSandwich = [aHomeSandwichMenu, aAboutSandwichMenu, aProyectsSandwichMenu];

const addBrackets = (type: string): void => {
    const objInputs: objInputRadioType = {
        'home': () => inputHomeSandwichMenu.checked = true,
        'about': () => inputAboutSandwichMenu.checked = true,
        'proyects': () => inputProyectsSandwichMenu.checked = true,
        // 'resume': () => inputResumeSandwichMenu.checked = true,
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
    if (screen.width >= 768) optionsMenuContainer.classList.toggle('visible-header__options');
};

const hiddenOptionsMenu = (): void => {
    if (screen.width >= 768) optionsMenuContainer.classList.remove('visible-header__options');
};

aHomeSandwichMenu.onclick = () => addBrackets('home');
aAboutSandwichMenu.onclick = () => addBrackets('about');
aProyectsSandwichMenu.onclick = () => addBrackets('proyects');
aContactSandwichMenu.onclick = () => addBrackets('contact');

sandwichMenu.onclick = () => showMenu();
menuElementsContainer.onclick = () => hiddeMenu();

optionsMenu.onclick = () => showOptionsMenu();
optionsMenuContainer.onclick = () => hiddenOptionsMenu();
