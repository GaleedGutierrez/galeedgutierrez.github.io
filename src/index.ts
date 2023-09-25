import '@utils/header';
import '@utils/typedjs';
import '@utils/particles.js';
import '@utils/googleAnalytics.js';
import '@styles/index/style.scss';
import '@styles/index/tablet.scss';
import '@styles/index/desktop.scss';

import showProjects from '@templates/showProjects';
import setTheme from '@utils/darkMode';
import {
	BUTTON_MORE_ABOUT_ME,
	TEXT_MORE_ABOUT_ME,
	THEME_INPUT,
} from '@utils/nodes';
import showParticles from '@utils/particlesJs';

import { ScreenSize } from './enum/enums';

// Function to toggle the visibility of the text more about me and toggle button
const showMoreAboutMe = (): void => {
	TEXT_MORE_ABOUT_ME.classList.toggle('visible');

	const IS_VISIBLE = TEXT_MORE_ABOUT_ME.classList.contains('visible');

	BUTTON_MORE_ABOUT_ME.innerText = IS_VISIBLE ? 'Ocultar' : 'Leer más';
	BUTTON_MORE_ABOUT_ME.ariaLabel = IS_VISIBLE
		? 'Ocultar sección de leer más sobre Galeed Gutierrez'
		: 'Leer más sobre Galeed Gutierrez';

	if (IS_VISIBLE) {
		const TITLE = TEXT_MORE_ABOUT_ME.parentElement?.querySelector(
			'div > h3'
		) as HTMLHeadElement;

		TITLE.tabIndex = 0;
		TITLE.focus();
	}
};

const NUMBER_PROJECTS = 6;
const IS_DARK_MODE =
	globalThis.matchMedia &&
	globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
const CHECK_THEME = globalThis.matchMedia('(prefers-color-scheme: dark)');
const CURRENT_SCREEN_SIZE = globalThis.innerWidth;

if (CURRENT_SCREEN_SIZE >= ScreenSize.TABLET) {
	THEME_INPUT.ariaHidden = 'true';
	THEME_INPUT.tabIndex = -1;
}

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
