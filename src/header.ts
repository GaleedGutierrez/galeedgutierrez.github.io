import { objInputRadioType } from './components/types.js';
import { INPUT_HOME_SANDWICH_MENU, A_HOME_SANDWICH_MENU, A_ABOUT_SANDWICH_MENU, A_PROJECTS_SANDWICH_MENU, INPUT_ABOUT_SANDWICH_MENU, INPUT_PROJECTS_SANDWICH_MENU, INPUT_CONTACT_SANDWICH_MENU, A_CONTACT_SANDWICH_MENU, SANDWICH_MENU, MENU_ELEMENTS_CONTAINER, OPTIONS_MENU, OPTIONS_MENU_CONTAINER } from './components/htmlElements.js';

const CONFIG = { threshold: 0.2 };
const ANCHOR_SANDWICH = [ A_HOME_SANDWICH_MENU, A_ABOUT_SANDWICH_MENU, A_PROJECTS_SANDWICH_MENU, A_CONTACT_SANDWICH_MENU ];

const addBrackets = (type: string): void => {
	const OBJ_INPUTS: objInputRadioType = {
		home     : () => INPUT_HOME_SANDWICH_MENU.checked = true,
		about    : () => INPUT_ABOUT_SANDWICH_MENU.checked = true,
		projects : () => INPUT_PROJECTS_SANDWICH_MENU.checked = true,
		// 'resume': () => inputResumeSandwichMenu.checked = true,
		contact  : () => INPUT_CONTACT_SANDWICH_MENU.checked = true,
	};

	OBJ_INPUTS[type]();
};

const OBSERVER = new IntersectionObserver(entries => {
	entries
		.filter(entry => entry.isIntersecting)
		.forEach(entry => {
			const ID_SECTION = entry.target.getAttribute('id');

			addBrackets(ID_SECTION);
		});
}, CONFIG);


ANCHOR_SANDWICH.forEach(anchor => {
	const hash = anchor.getAttribute('href');
	const target = document.querySelector(hash);

	if (target) OBSERVER.observe(target);
});

const showMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.toggle('visible-header-menu');
	SANDWICH_MENU.classList.toggle('header__menu-sandwich--active');
};

const hiddenMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.remove('visible-header-menu');
	SANDWICH_MENU.classList.remove('header__menu-sandwich--active');
};

const showOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.toggle('visible-header__options');
	OPTIONS_MENU.classList.toggle('header__menu-options-changes--active');
};

const hiddenOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.remove('visible-header__options');
	OPTIONS_MENU.classList.remove('header__menu-options-changes--active');
};

window.addEventListener('resize', () => {
	if (screen.width < 768) hiddenOptionsMenu();
	if (screen.width >= 768) hiddenMenu();
});

A_HOME_SANDWICH_MENU.onclick = () => addBrackets('home');
A_ABOUT_SANDWICH_MENU.onclick = () => addBrackets('about');
A_PROJECTS_SANDWICH_MENU.onclick = () => addBrackets('projects');
A_CONTACT_SANDWICH_MENU.onclick = () => addBrackets('contact');

SANDWICH_MENU.onclick = () => showMenu();
MENU_ELEMENTS_CONTAINER.onclick = () => hiddenMenu();

OPTIONS_MENU.onclick = () => showOptionsMenu();
OPTIONS_MENU_CONTAINER.onclick = () => hiddenOptionsMenu();

