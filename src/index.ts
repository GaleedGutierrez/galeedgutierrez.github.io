import { sandwichMenu, menuElementsContainer} from "./components/htmlElements.js";

const showMenu = () => {
    menuElementsContainer.classList.toggle('visibleHeaderMenu');
    sandwichMenu.classList.toggle('header__menu-sandwich--active');
};

const hiddeMenu = () => {
    menuElementsContainer.classList.remove('visibleHeaderMenu');
    sandwichMenu.classList.remove('header__menu-sandwich--active');
}

sandwichMenu.onclick = () => showMenu();

menuElementsContainer.onclick = () => hiddeMenu();