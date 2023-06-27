/* eslint-disable camelcase */
import { HEAD, THEME_INPUT } from './components/htmlElements';

declare const particlesJS: any;

const changedTheme = (): void => {
	const DARK_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches;

	applyThemes(DARK_MODE);
};

const applyThemes = (theme: boolean): void => {
	if (theme) {
		// applyDarkTheme();
		THEME_INPUT.checked = true;
	} else {
		// LINK_GRAL.parentNode.removeChild(LINK_GRAL);
		// LINK_WIDTH_768.parentNode.removeChild(LINK_WIDTH_768);
		THEME_INPUT.checked = false;
	}

	// applyOtter(theme);
	particleJs(theme);
};

const applyDarkTheme = (): void => {
	LINK_GRAL.type = 'text/css';
	LINK_GRAL.rel = 'stylesheet';
	LINK_GRAL.href = 'dark.css';

	HEAD.appendChild(LINK_GRAL);
	HEAD.appendChild(LINK_WIDTH_768);
};

// const generateOtter = (srcImg: string): HTMLElement => {
// 	const figureOtter = document.createElement('figure');
// 	const img = document.createElement('img');

// 	figureOtter.className = 'a-otter-icon g-about-me__otter-icon';
// 	img.src = srcImg;
// 	img.alt = 'Otter Icon';
// 	img.loading = 'lazy';
// 	figureOtter.appendChild(img);

// 	return figureOtter;
// };

// const applyOtter = (theme: boolean): void => {
// 	const OTTER = theme ? OTTER_WHITE : OTTER_DARK;

// 	ABOUT_SECTION.appendChild(OTTER);
// };

const particleJs = (theme: boolean): void => {
	const WHITE_THEME = '#343a40';
	const DARK_THEME = '#f8f9fa';
	const OPTIONS = {
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 600,
				},
			},
			color: {
				value: theme ? DARK_THEME : WHITE_THEME,
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000',
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: theme ? DARK_THEME : WHITE_THEME,
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 2,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'repulse',
				},
				onclick: {
					enable: false,
					mode: 'push',
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
	};

	// debugger;

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS('particles-js', OPTIONS, function () {
		console.log('callback - particles.js config loaded');
	});
};

const DARK_MODE =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
const CHANGE_THEME = window.matchMedia('(prefers-color-scheme: dark)');
// const OTTER_WHITE = generateOtter(
// 	'../assets/images/img/animals/otter/otter-white.webp'
// );
// const OTTER_DARK = generateOtter(
// 	'../assets/images/img/animals/otter/otter-black.webp'
// );

const LINK_GRAL = document.createElement('link');
const LINK_WIDTH_768 = document.createElement('link');

CHANGE_THEME.addEventListener('change', changedTheme);
// screen.orientation.addEventListener('change', () => {
// 	if (screen.width >= 768 && CHANGE_THEME) applyDarkThemeWidth768();
// });

if (DARK_MODE) applyThemes(DARK_MODE);

// applyOtter(DARK_MODE);
particleJs(DARK_MODE);

THEME_INPUT.onclick = () => applyThemes(THEME_INPUT.checked);
