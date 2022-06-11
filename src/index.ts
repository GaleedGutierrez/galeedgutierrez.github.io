import { sandwichMenu, menuElementsContainer } from "./components/htmlElements.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
import Typed from "../dist/components/typed.js/src/typed.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typed = new Typed('.home__my-name', {
    strings: ['Galeed Gutierrez'],
    startDelay: 500,
    typeSpeed: 60,
});

const showMenu = (): void => {
    menuElementsContainer.classList.toggle('visibleHeaderMenu');
    sandwichMenu.classList.toggle('header__menu-sandwich--active');
};

const hiddeMenu = (): void => {
    menuElementsContainer.classList.remove('visibleHeaderMenu');
    sandwichMenu.classList.remove('header__menu-sandwich--active');
};

sandwichMenu.onclick = () => showMenu();
menuElementsContainer.onclick = () => hiddeMenu();


// menuElementsContainer.classList.add('visibleHeaderMenu');
// sandwichMenu.classList.add('header__menu-sandwich--active');
