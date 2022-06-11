import { buttonMoreAboutMe, textMoreAboutMe } from "./components/htmlElements.js";

const originalDates = () => {
    let inicialNumber = 0;
    return function () {
        inicialNumber++;
        return inicialNumber;
    };
};

const showMoreAboutMe = () => {
    textMoreAboutMe.classList.toggle('visibleMoreAboutme');
    if (condition() % 2 === 0) {
        buttonMoreAboutMe.innerText = 'Leer más';
    } else {
        buttonMoreAboutMe.innerText = 'Leer menos';
    }
};

const condition = originalDates();
buttonMoreAboutMe.onclick = () => showMoreAboutMe();
