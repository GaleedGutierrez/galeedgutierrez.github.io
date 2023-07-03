import { HTML_ROOT, THEME_INPUT } from '@utils/nodes';
import showParticles from '@utils/particlesJs';

const applyThemes = (particles: boolean): void => {
	const IS_DARK = HTML_ROOT.classList.contains('dark-theme');

	THEME_INPUT.checked = IS_DARK;

	if (particles) showParticles(IS_DARK);
};

const setTheme = ({
	particles = false,
	event,
}: {
	particles?: boolean;
	event?: Event;
} = {}): void => {
	const NODE = event?.target as HTMLInputElement;

	if (NODE?.tagName === 'INPUT') {
		HTML_ROOT.classList.toggle('light-theme');
		HTML_ROOT.classList.toggle('dark-theme');

		applyThemes(particles);

		return;
	}

	const IS_LIGHT = window.matchMedia('(prefers-color-scheme: light)').matches;

	HTML_ROOT.classList.toggle('light-theme', IS_LIGHT);
	HTML_ROOT.classList.toggle('dark-theme', !IS_LIGHT);

	applyThemes(particles);
};

export default setTheme;
