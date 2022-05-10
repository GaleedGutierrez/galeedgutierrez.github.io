import { sandwichMenu, menuElementsContainer } from "./components/htmlElements.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
import Typed from "../dist/components/typed.js/src/typed.js";
var showMenu = function () {
    menuElementsContainer.classList.toggle('visibleHeaderMenu');
    sandwichMenu.classList.toggle('header__menu-sandwich--active');
};
var hiddeMenu = function () {
    menuElementsContainer.classList.remove('visibleHeaderMenu');
    sandwichMenu.classList.remove('header__menu-sandwich--active');
};
sandwichMenu.onclick = function () { return showMenu(); };
menuElementsContainer.onclick = function () { return hiddeMenu(); };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var typed = new Typed('.home__my-name', {
    strings: ['Galeed Gutierrez'],
    startDelay: 500,
    typeSpeed: 60
});
