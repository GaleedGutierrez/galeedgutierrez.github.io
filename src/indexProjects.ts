import '@utils/header';
import '@styles/projects/style.scss';
import '@utils/googleAnalytics.js';

import showProjects from '@templates/showProjects';
import setTheme from '@utils/darkMode';
import { THEME_INPUT } from '@utils/nodes';
import { PROJECTS } from '@utils/projects';

import { ScreenSize } from './enum/enums';

const CHECK_THEME = globalThis.matchMedia('(prefers-color-scheme: dark)');
const CURRENT_SCREEN_SIZE = globalThis.innerWidth;

if (CURRENT_SCREEN_SIZE >= ScreenSize.TABLET) {
	THEME_INPUT.ariaHidden = 'true';
	THEME_INPUT.tabIndex = -1;
}

setTheme();
showProjects(PROJECTS.length);

CHECK_THEME.addEventListener('change', (event) => setTheme({ event }));
THEME_INPUT.addEventListener('click', (event) => setTheme({ event }));
