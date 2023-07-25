import {
	hiddenMenu,
	hiddenOptionsMenu,
	showMenu,
	showOptionsMenu,
} from '@utils/menu';
import {
	MENU_ELEMENTS_CONTAINER,
	OPTIONS_MENU,
	OPTIONS_MENU_CONTAINER,
	SANDWICH_MENU,
} from '@utils/nodes';

// const IS_INDEX_FILE =
// 	Boolean(INPUT_HOME_SANDWICH_MENU) && Boolean(INPUT_ABOUT_SANDWICH_MENU);

// export const addBrackets = (type: string): void => {
// 	const OBJ_INPUTS: objInputRadioType = IS_INDEX_FILE
// 		? {
// 				home: () => (INPUT_HOME_SANDWICH_MENU.checked = true),
// 				about: () => (INPUT_ABOUT_SANDWICH_MENU.checked = true),
// 				projects: () => (INPUT_PROJECTS_SANDWICH_MENU.checked = true),
// 				// 'resume': () => inputResumeSandwichMenu.checked = true,
// 				contact: () => (INPUT_CONTACT_SANDWICH_MENU.checked = true),
// 		  }
// 		: {
// 				projects: () => (INPUT_PROJECTS_SANDWICH_MENU.checked = true),
// 				contact: () => (INPUT_CONTACT_SANDWICH_MENU.checked = true),
// 		  };

// 	OBJ_INPUTS[type]();
// };

// const ANCHOR_SANDWICH = IS_INDEX_FILE
// 	? [
// 			A_HOME_SANDWICH_MENU,
// 			A_ABOUT_SANDWICH_MENU,
// 			A_PROJECTS_SANDWICH_MENU,
// 			A_CONTACT_SANDWICH_MENU,
// 	  ]
// 	: [A_PROJECTS_SANDWICH_MENU, A_CONTACT_SANDWICH_MENU];

const TABLET_SIZE = 768;

// ANCHOR_SANDWICH.forEach((anchor) => {
// 	const hash = anchor.getAttribute('href');

// 	if (!hash) return;

// 	const SECTION = document.querySelector(hash);

// 	if (SECTION) OBSERVER_SECTIONS.observe(SECTION);
// });

window.addEventListener('resize', () => {
	if (screen.width < TABLET_SIZE) {
		hiddenOptionsMenu();
	} else {
		hiddenMenu();
	}
});

// A_HOME_SANDWICH_MENU.onclick = () => addBrackets('home');
// A_ABOUT_SANDWICH_MENU.onclick = () => addBrackets('about');
// A_PROJECTS_SANDWICH_MENU.onclick = () => addBrackets('projects');
// A_CONTACT_SANDWICH_MENU.onclick = () => addBrackets('contact');
SANDWICH_MENU.addEventListener('click', showMenu);
MENU_ELEMENTS_CONTAINER.addEventListener('click', hiddenMenu);

OPTIONS_MENU.onclick = () => showOptionsMenu();
OPTIONS_MENU_CONTAINER.onclick = () => hiddenOptionsMenu();
