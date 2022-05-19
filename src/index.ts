import { sandwichMenu, menuElementsContainer, inputHomeSandwichMenu, aHomeSandwichMenu, aAboutSandwichMenu, aProyectsSandwichMenu, aResumeSandwichMenu, aContactSandwichMenu, inputAboutSandwichMenu, inputProyectsSandwichMenu, inputResumeSandwichMenu, inputContactSandwichMenu} from "./components/htmlElements.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
import Typed from "../dist/components/typed.js/src/typed.js";
import { objInputRadioType } from "./components/types.js";

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

const addBrackets = (type: string): void => {
    const objInputs: objInputRadioType = {
        'home': () => inputHomeSandwichMenu.checked = true,
        'about': () => inputAboutSandwichMenu.checked = true,
        'proyects': () => inputProyectsSandwichMenu.checked = true,
        'resume': () => inputResumeSandwichMenu.checked = true,
        'contact': () => inputContactSandwichMenu.checked = true,
    };
    objInputs[type]();
};

sandwichMenu.onclick = () => showMenu();
menuElementsContainer.onclick = () => hiddeMenu();
aHomeSandwichMenu.onclick = () => addBrackets('home');
aAboutSandwichMenu.onclick = () => addBrackets('about');
aProyectsSandwichMenu.onclick = () => addBrackets('proyects');
aResumeSandwichMenu.onclick = () => addBrackets('resume');
aContactSandwichMenu.onclick = () => addBrackets('contact');
