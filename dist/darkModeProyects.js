import { head, themeInput } from "./components/htmlElements.js";
const changedTheme = () => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyThemes(darkMode);
};
const applyThemes = (theme) => {
    if (theme) {
        applyDarkTheme();
        themeInput.checked = true;
    }
    else {
        linkGral.parentNode.removeChild(linkGral);
        linkWidth768.parentNode.removeChild(linkWidth768);
        themeInput.checked = false;
    }
};
const applyDarkTheme = () => {
    linkGral.type = 'text/css';
    linkGral.rel = 'stylesheet';
    linkGral.href = '../css/index/dark.css';
    if (screen.width >= 768)
        apllyDarkThemeWidth768();
    head.appendChild(linkGral);
    head.appendChild(linkWidth768);
};
const apllyDarkThemeWidth768 = () => {
    linkWidth768.type = 'text/css';
    linkWidth768.rel = 'stylesheet';
    linkWidth768.href = '../css/index/dark-tablet.css';
};
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const changeTheme = window.matchMedia('(prefers-color-scheme: dark)');
const linkGral = document.createElement('link');
const linkWidth768 = document.createElement('link');
changeTheme.addEventListener('change', changedTheme);
screen.orientation.addEventListener("change", () => {
    if (screen.width >= 768 && changeTheme)
        apllyDarkThemeWidth768();
});
if (darkMode)
    applyThemes(darkMode);
themeInput.onclick = () => applyThemes(themeInput.checked);
