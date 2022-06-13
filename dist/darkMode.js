import { head } from "./components/htmlElements.js";
const changedTheme = () => {
    // debugger
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let inside = false;
    if (darkMode) {
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = '../css/dark.css';
        link.id = 'head__dark-mode-id';
        head.appendChild(link);
        inside = true;
    }
    if (!darkMode && !inside && link) {
        link.parentNode.removeChild(link);
    }
};
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const link = document.createElement('link');
const changeTheme = window.matchMedia('(prefers-color-scheme: dark)');
changeTheme.addEventListener('change', changedTheme);
if (darkMode) {
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '../css/dark.css';
    link.id = 'head__dark-mode-id';
    head.appendChild(link);
}
