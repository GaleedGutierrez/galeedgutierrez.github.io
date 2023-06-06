import { BUTTON_MORE_ABOUT_ME, TEXT_MORE_ABOUT_ME } from './components/htmlElements';

const originalDates = (): () => number => {
	let inicialNumber = 0;

	return function (): number {
		inicialNumber++;

		return inicialNumber;
	};
};

const showMoreAboutMe = (): void => {
	TEXT_MORE_ABOUT_ME.classList.toggle('visible-more-about-me');
	BUTTON_MORE_ABOUT_ME.innerText = (condition() % 2 === 0)
		? 'Leer más'
		: 'Leer menos';
};

const condition = originalDates();

BUTTON_MORE_ABOUT_ME.onclick = () => showMoreAboutMe();
