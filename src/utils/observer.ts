import { addBrackets } from '@utils/header';

const CONFIG = { threshold: 0.2 };

export const OBSERVER_SECTIONS = new IntersectionObserver((entries) => {
	entries
		.filter((entry) => entry.isIntersecting)
		.forEach((entry) => {
			const SECTION = entry.target as HTMLElement;
			const ID = SECTION.getAttribute('id');

			if (!ID) return;

			addBrackets(ID);
		});
}, CONFIG);

// export const OBSERVER_CARD = new IntersectionObserver();
