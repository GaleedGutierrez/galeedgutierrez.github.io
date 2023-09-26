import { ScreenSize } from '@src/enum/enums';
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

// ANCHOR_SANDWICH.forEach((anchor) => {
// 	const hash = anchor.getAttribute('href');

// 	if (!hash) return;

// 	const SECTION = document.querySelector(hash);

// 	if (SECTION) OBSERVER_SECTIONS.observe(SECTION);
// });
const TABLET_MEDIA_QUERY = globalThis.matchMedia('(min-width: 768px)');
const CURRENT_SCREEN_SIZE = globalThis.innerWidth;

if (CURRENT_SCREEN_SIZE >= ScreenSize.TABLET) {
	MENU_ELEMENTS_CONTAINER.ariaHidden = 'false';
	MENU_ELEMENTS_CONTAINER.tabIndex = -1;
}

SANDWICH_MENU.addEventListener('click', showMenu);
MENU_ELEMENTS_CONTAINER.addEventListener('click', hiddenMenu);

OPTIONS_MENU.onclick = () => showOptionsMenu();
OPTIONS_MENU_CONTAINER.onclick = () => hiddenOptionsMenu();

TABLET_MEDIA_QUERY.addEventListener('change', (event) => {
	if (event.matches) {
		hiddenMenu();
	} else {
		hiddenOptionsMenu();
	}
});
