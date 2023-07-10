import '@utils/header';
import '@utils/typedjs';
import '@utils/particles.js';

import setTheme from '@utils/darkMode';
import {
	BUTTON_MORE_ABOUT_ME,
	TEXT_MORE_ABOUT_ME,
	THEME_INPUT,
} from '@utils/nodes';
import showParticles from '@utils/particlesJs';

import showProjects from './templates/showProjects';

// Function to toggle the visibility of the text more about me and toggle button
const showMoreAboutMe = (): void => {
	TEXT_MORE_ABOUT_ME.classList.toggle('visible');

	const IS_VISIBLE = TEXT_MORE_ABOUT_ME.classList.contains('visible');

	BUTTON_MORE_ABOUT_ME.innerText = IS_VISIBLE ? 'Ocultar' : 'Leer más';
};

const NUMBER_PROJECTS = 6;
const IS_DARK_MODE =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
const CHECK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

setTheme({ particles: true });
showParticles(IS_DARK_MODE);
showProjects(NUMBER_PROJECTS);

BUTTON_MORE_ABOUT_ME.addEventListener('click', showMoreAboutMe);
CHECK_THEME.addEventListener('change', (event) =>
	setTheme({ event, particles: true })
);
THEME_INPUT.addEventListener('click', (event) =>
	setTheme({ event, particles: true })
);
