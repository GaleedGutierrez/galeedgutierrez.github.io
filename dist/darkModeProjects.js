import { HEAD, THEME_INPUT } from './components/htmlElements.js';
const changedTheme = () => {
    const DARK_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyThemes(DARK_MODE);
};
const applyThemes = (theme) => {
    if (theme) {
        applyDarkTheme();
        THEME_INPUT.checked = true;
    }
    else {
        LINK_GRAL.parentNode.removeChild(LINK_GRAL);
        LINK_WIDTH_768.parentNode.removeChild(LINK_WIDTH_768);
        THEME_INPUT.checked = false;
    }
};
const applyDarkTheme = () => {
    LINK_GRAL.type = 'text/css';
    LINK_GRAL.rel = 'stylesheet';
    LINK_GRAL.href = '../css/index/dark.css';
    if (screen.width >= 768)
        applyDarkThemeWidth768();
    HEAD.appendChild(LINK_GRAL);
    HEAD.appendChild(LINK_WIDTH_768);
};
const applyDarkThemeWidth768 = () => {
    LINK_WIDTH_768.type = 'text/css';
    LINK_WIDTH_768.rel = 'stylesheet';
    LINK_WIDTH_768.href = '../css/index/dark-tablet.css';
};
const DARK_MODE = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const CHANGE_THEME = window.matchMedia('(prefers-color-scheme: dark)');
const LINK_GRAL = document.createElement('link');
const LINK_WIDTH_768 = document.createElement('link');
CHANGE_THEME.addEventListener('change', changedTheme);
screen.orientation.addEventListener('change', () => {
    if (screen.width >= 768 && CHANGE_THEME)
        applyDarkThemeWidth768();
});
if (DARK_MODE)
    applyThemes(DARK_MODE);
THEME_INPUT.onclick = () => applyThemes(THEME_INPUT.checked);
