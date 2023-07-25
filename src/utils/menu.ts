import {
	MENU_ELEMENTS_CONTAINER,
	OPTIONS_MENU,
	OPTIONS_MENU_CONTAINER,
	SANDWICH_MENU_ICON,
} from '@utils/nodes';

export const showMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.toggle(
		'g-header__menu-container--visible'
	);
	SANDWICH_MENU_ICON.classList.toggle('a-sandwich-menu--active');
};

export const hiddenMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.remove(
		'g-header__menu-container--visible'
	);
	SANDWICH_MENU_ICON.classList.remove('a-sandwich-menu--active');
};

export const showOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.toggle('g-header__options--visible');
	OPTIONS_MENU.classList.toggle('g-header__changes-options-menu--active');
};

export const hiddenOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.remove('g-header__options--visible');
	OPTIONS_MENU.classList.remove('g-header__changes-options-menu--active');
};
