import { ScreenSize } from '@src/enum/enums';
import {
	A_HOME_SANDWICH_MENU,
	MENU_ELEMENTS_CONTAINER,
	OPTIONS_MENU_CONTAINER,
	OPTIONS_MENU_ICON,
	SANDWICH_MENU,
	SANDWICH_MENU_ICON,
	THEME_INPUT,
} from '@utils/nodes';

const CURRENT_SCREEN_SIZE = globalThis.innerWidth;

export const showMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.toggle(
		'g-header__menu-container--visible'
	);
	SANDWICH_MENU_ICON.classList.toggle('a-sandwich-menu--active');
	SANDWICH_MENU.classList.toggle('a-sandwich-menu-button--active');

	const IS_VISIBLE_MENU = MENU_ELEMENTS_CONTAINER.classList.contains(
		'g-header__menu-container--visible'
	);

	MENU_ELEMENTS_CONTAINER.ariaHidden = `${!IS_VISIBLE_MENU}`;
	MENU_ELEMENTS_CONTAINER.tabIndex = IS_VISIBLE_MENU ? 0 : -1;

	if (IS_VISIBLE_MENU) A_HOME_SANDWICH_MENU.focus();
};

export const hiddenMenu = (): void => {
	MENU_ELEMENTS_CONTAINER.classList.remove(
		'g-header__menu-container--visible'
	);
	SANDWICH_MENU_ICON.classList.remove('a-sandwich-menu--active');
	SANDWICH_MENU.classList.remove('a-sandwich-menu-button--active');

	if (CURRENT_SCREEN_SIZE < ScreenSize.TABLET) {
		MENU_ELEMENTS_CONTAINER.ariaHidden = 'true';
		MENU_ELEMENTS_CONTAINER.tabIndex = -1;
	}
};

export const showOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.toggle('g-header__options--visible');
	OPTIONS_MENU_ICON.classList.toggle(
		'g-header__changes-options-menu--active'
	);

	const IS_VISIBLE = OPTIONS_MENU_CONTAINER.classList.contains(
		'g-header__options--visible'
	);

	THEME_INPUT.ariaHidden = `${!IS_VISIBLE}`;
	THEME_INPUT.tabIndex = IS_VISIBLE ? 0 : -1;

	if (IS_VISIBLE) THEME_INPUT.focus();
};

export const hiddenOptionsMenu = (): void => {
	OPTIONS_MENU_CONTAINER.classList.remove('g-header__options--visible');
	OPTIONS_MENU_ICON.classList.remove(
		'g-header__changes-options-menu--active'
	);

	if (CURRENT_SCREEN_SIZE >= ScreenSize.TABLET) {
		THEME_INPUT.ariaHidden = 'true';
		THEME_INPUT.tabIndex = -1;
	}
};
