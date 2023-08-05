/* eslint-disable padding-line-between-statements */
const $ = (selector: string) => document.querySelector(selector);

export const HTML_ROOT = document.querySelector('html') as HTMLHtmlElement;

// Head Section
export const HEAD = $('#head-id') as HTMLHeadElement;

// Header Section
export const SANDWICH_MENU = $(
	'#header__menu-sandwich-button'
) as HTMLButtonElement;
export const SANDWICH_MENU_ICON = $(
	'#header__menu-sandwich-id'
) as HTMLButtonElement;
export const MENU_ELEMENTS_CONTAINER = $(
	'#header__nav-container-id'
) as HTMLElement;
export const INPUT_HOME_SANDWICH_MENU = $(
	'#nav__input-radio-id-1'
) as HTMLInputElement;
export const INPUT_ABOUT_SANDWICH_MENU = $(
	'#nav__input-radio-id-2'
) as HTMLInputElement;
export const INPUT_PROJECTS_SANDWICH_MENU = $(
	'#nav__input-radio-id-3'
) as HTMLInputElement;
export const INPUT_RESUME_SANDWICH_MENU = $(
	'#nav__input-radio-id-4'
) as HTMLInputElement;
export const INPUT_CONTACT_SANDWICH_MENU = $(
	'#nav__input-radio-id-5'
) as HTMLInputElement;
export const header = $('#header-id') as HTMLElement;
export const A_HOME_SANDWICH_MENU = $('#header__nav-home') as HTMLAnchorElement;
export const A_ABOUT_SANDWICH_MENU = $(
	'#header__nav-about'
) as HTMLAnchorElement;
export const A_PROJECTS_SANDWICH_MENU = $(
	'#header__nav-projects'
) as HTMLAnchorElement;
export const LABEL_THEME_SWITCH = $('#switch-label') as HTMLLabelElement;

// export const aResumeSandwichMenu = $('header__nav-resume') as HTMLAnchorElement;
export const A_CONTACT_SANDWICH_MENU = $(
	'#header__nav-contact'
) as HTMLAnchorElement;
export const THEME_INPUT = $('#switch_theme') as HTMLInputElement;
export const OPTIONS_MENU = $(
	'#header__menu-options-changes-button'
) as HTMLButtonElement;
export const OPTIONS_MENU_ICON = $(
	'#header__menu-options-changes-id'
) as HTMLOrSVGImageElement;
export const OPTIONS_MENU_CONTAINER = $('#header__options-id') as HTMLElement;

// About me section
export const ABOUT_SECTION = $('#about') as HTMLElement;
export const BUTTON_MORE_ABOUT_ME = $(
	'#about-me__button-id'
) as HTMLButtonElement;
export const TEXT_MORE_ABOUT_ME = $(
	'#about-me__more-information-container-id'
) as HTMLParagraphElement;
// export const TEXT_MORE_ABOUT_ME_CONTAINER = $(
// 	'#g-about-me__presentation-title'
// ) as HTMLHeadElement;

// Project Section
export const CONTAINER_PROJECTS_SECTION = $(
	'#portfolio__projects-container-id'
) as HTMLElement;
