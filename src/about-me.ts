import { buttonMoreAboutMe, textMoreAboutMe } from "./components/htmlElements.js";

const originalDates = (): () => number => {
    let inicialNumber = 0;
    return function (): number {
        inicialNumber++;
        return inicialNumber;
    };
};

const showMoreAboutMe = (): void => {
    textMoreAboutMe.classList.toggle('visibleMoreAboutme');
    if (condition() % 2 === 0) {
        buttonMoreAboutMe.innerText = 'Leer más';
    } else {
        buttonMoreAboutMe.innerText = 'Leer menos';
    }
};

const condition = originalDates();
buttonMoreAboutMe.onclick = () => showMoreAboutMe();
