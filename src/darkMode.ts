import { ABOUT_SECTION, HEAD, THEME_INPUT } from './components/htmlElements.js';

const changedTheme = (): void => {
	const DARK_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches;

	applyThemes(DARK_MODE);
};

const applyThemes = (theme: boolean): void => {
	if (theme) {
		applyDarkTheme();
		THEME_INPUT.checked = true;
	} else {
		LINK_GRAL.parentNode.removeChild(LINK_GRAL);
		LINK_WIDTH_768.parentNode.removeChild(LINK_WIDTH_768);
		THEME_INPUT.checked = false;
	}

	applyOtter(theme);
	particleJs(theme);
};

const applyDarkTheme = (): void => {
	LINK_GRAL.type = 'text/css';
	LINK_GRAL.rel = 'stylesheet';
	LINK_GRAL.href = '../css/index/dark.css';

	if (screen.width >= 768) applyDarkThemeWidth768();

	HEAD.appendChild(LINK_GRAL);
	HEAD.appendChild(LINK_WIDTH_768);
};

const applyDarkThemeWidth768 = (): void => {
	LINK_WIDTH_768.type = 'text/css';
	LINK_WIDTH_768.rel = 'stylesheet';
	LINK_WIDTH_768.href = '../css/index/dark-tablet.css';
};

const generateOtter = (srcImg: string): HTMLElement => {
	const figureOtter = document.createElement('figure');
	const img = document.createElement('img');

	figureOtter.className = 'main__otter-figure';
	img.src = srcImg;
	img.alt = 'Otter Icon';
	img.loading = 'lazy';
	figureOtter.appendChild(img);

	return figureOtter;
};

const applyOtter = (theme: boolean): void => {
	const OTTER = theme
		? OTTER_WHITE
		: OTTER_DARK;

	ABOUT_SECTION.appendChild(OTTER);
};

const particleJs = (theme: boolean): void => {
	const white = {
		particles : {
			number : {
				value   : 100,
				density : {
					enable     : true,
					value_area : 600
				}
			},
			color : {
				value : '#343a40'
			},
			shape : {
				type   : 'circle',
				stroke : {
					width : 0,
					color : '#000000'
				},
				polygon : {
					nb_sides : 5
				},
				image : {
					src    : 'img/github.svg',
					width  : 100,
					height : 100
				}
			},
			opacity : {
				value  : 0.5,
				random : false,
				anim   : {
					enable      : false,
					speed       : 1,
					opacity_min : 0.1,
					sync        : false
				}
			},
			size : {
				value  : 3,
				random : true,
				anim   : {
					enable   : false,
					speed    : 40,
					size_min : 0.1,
					sync     : false
				}
			},
			line_linked : {
				enable   : true,
				distance : 150,
				color    : '#343a40',
				opacity  : 0.4,
				width    : 1
			},
			move : {
				enable    : true,
				speed     : 2,
				direction : 'none',
				random    : false,
				straight  : false,
				out_mode  : 'out',
				bounce    : false,
				attract   : {
					enable  : false,
					rotateX : 600,
					rotateY : 1200
				}
			}
		},
		interactivity : {
			detect_on : 'canvas',
			events    : {
				onhover : {
					enable : false,
					mode   : 'repulse'
				},
				onclick : {
					enable : false,
					mode   : 'push'
				},
				resize : true
			},
			modes : {
				grab : {
					distance    : 400,
					line_linked : {
						opacity : 1
					}
				},
				bubble : {
					distance : 400,
					size     : 40,
					duration : 2,
					opacity  : 8,
					speed    : 3
				},
				repulse : {
					distance : 200,
					duration : 0.4
				},
				push : {
					particles_nb : 4
				},
				remove : {
					particles_nb : 2
				}
			}
		},
		retina_detect : true
	};

	const dark = {
		particles : {
			number : {
				value   : 100,
				density : {
					enable     : true,
					value_area : 600
				}
			},
			color : {
				value : '#f8f9fa'
			},
			shape : {
				type   : 'circle',
				stroke : {
					width : 0,
					color : '#000000'
				},
				polygon : {
					nb_sides : 5
				},
				image : {
					src    : 'img/github.svg',
					width  : 100,
					height : 100
				}
			},
			opacity : {
				value  : 0.5,
				random : false,
				anim   : {
					enable      : false,
					speed       : 1,
					opacity_min : 0.1,
					sync        : false
				}
			},
			size : {
				value  : 3,
				random : true,
				anim   : {
					enable   : false,
					speed    : 40,
					size_min : 0.1,
					sync     : false
				}
			},
			line_linked : {
				enable   : true,
				distance : 150,
				color    : '#f8f9fa',
				opacity  : 0.4,
				width    : 1
			},
			move : {
				enable    : true,
				speed     : 2,
				direction : 'none',
				random    : false,
				straight  : false,
				out_mode  : 'out',
				bounce    : false,
				attract   : {
					enable  : false,
					rotateX : 600,
					rotateY : 1200
				}
			}
		},
		interactivity : {
			detect_on : 'canvas',
			events    : {
				onhover : {
					enable : false,
					mode   : 'repulse'
				},
				onclick : {
					enable : false,
					mode   : 'push'
				},
				resize : true
			},
			modes : {
				grab : {
					distance    : 400,
					line_linked : {
						opacity : 1
					}
				},
				bubble : {
					distance : 400,
					size     : 40,
					duration : 2,
					opacity  : 8,
					speed    : 3
				},
				repulse : {
					distance : 200,
					duration : 0.4
				},
				push : {
					particles_nb : 4
				},
				remove : {
					particles_nb : 2
				}
			}
		},
		retina_detect : true
	};
	const THEME_APPLY = theme
		? dark
		: white;

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore: Unreachable code error
	particlesJS('particles-js', THEME_APPLY,
		function () {
			console.log('callback - particles.js config loaded');
		});

};

const DARK_MODE = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const CHANGE_THEME = window.matchMedia('(prefers-color-scheme: dark)');
const OTTER_WHITE = generateOtter('../assets/img/animals/otter/otter-white.webp');
const OTTER_DARK = generateOtter('../assets/img/animals/otter/otter-black.webp');

const LINK_GRAL = document.createElement('link');
const LINK_WIDTH_768 = document.createElement('link');

CHANGE_THEME.addEventListener('change', changedTheme);
screen.orientation.addEventListener('change', () => {
	if (screen.width >= 768 && CHANGE_THEME) applyDarkThemeWidth768();
});

if (DARK_MODE) applyThemes(DARK_MODE);

applyOtter(DARK_MODE);
particleJs(DARK_MODE);

THEME_INPUT.onclick = () => applyThemes(THEME_INPUT.checked);

