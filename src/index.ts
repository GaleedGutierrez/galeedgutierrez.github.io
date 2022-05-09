import { sandwichMenu, menuElementsContainer} from "./components/htmlElements.js";

sandwichMenu.onclick = () => menuElementsContainer.classList.toggle('visibleHeaderMenu') ;

menuElementsContainer.onclick = () => menuElementsContainer.classList.remove('visibleHeaderMenu');