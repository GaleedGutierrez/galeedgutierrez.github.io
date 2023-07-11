import '@utils/header';
import '@styles/projects/style.scss';
import '@styles/projects/tablet.scss';
import '@styles/projects/desktop.scss';

import showProjects from '@templates/showProjects';
import setTheme from '@utils/darkMode';
import { THEME_INPUT } from '@utils/nodes';
import { PROJECTS } from '@utils/projects';

const CHECK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

setTheme();
showProjects(PROJECTS.length);

CHECK_THEME.addEventListener('change', (event) => setTheme({ event }));
THEME_INPUT.addEventListener('click', (event) => setTheme({ event }));
