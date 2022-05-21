import { containerProyectsSection } from './components/htmlElements.js';
import proyects from './components/API/proyects.json' assert {type: "json"};


const showProyects = () => {
    for (let i = 0; i < 6; i++) {
        let iconsTechnologies = '';
        for (let j = 0; j < PROYECTS[i].technologies.length; j++) {
            if (PROYECTS[i].technologies[j] === "PUG") {
                iconsTechnologies += `
                <figure class="technologies__icon-figure technologies__pug-icon">
                    <img id="" src="https://drive.google.com/uc?id=${PROYECTS[i].technologiesIcons[j]}" alt="Icon HTML"/>
                </figure>
            `;
            } else {
                iconsTechnologies += `
                    <figure class="technologies__icon-figure">
                        <img id="" src="https://drive.google.com/uc?id=${PROYECTS[i].technologiesIcons[j]}" alt="Icon HTML"/>
                    </figure>
                `;
            }
        }
        const article = document.createElement('article');
        article.innerHTML = `
        <article>
            <figure>
                <img
                    class="proyect-container__img"
                    src=${PROYECTS[i].img}
                    alt="Screenshot de ${PROYECTS[i].name}"
                />
            </figure>
            <section class="portfolio__info-container">
                <section
                    class="proyect-container__technologies-container"
                >
                    ${iconsTechnologies}
                </section>
                <h3>${PROYECTS[i].name}</h3>
                <p>
                    ${PROYECTS[i].description}
                </p>
                <a class="portfolio__courses-section" target="_blank" href=${PROYECTS[i].course.url} >
                    <figure
                        class="courses-section__course-icon-figure"
                    >
                        <img
                            src=${PROYECTS[i].course.img}
                            alt="Logo del ${PROYECTS[i].course.name}"
                        />
                    </figure>
                    <p class="courses-section__course-name">
                        ${PROYECTS[i].course.name}
                    </p>
                    <p class="courses-section__plataform">
                        ${PROYECTS[i].course.platform}
                    </p>
                </a>
                <section class="portfolio__view-proyect">
                    <form target="_blank" action=${PROYECTS[i].url}>
                        <input
                            class="portfolio__button"
                            type="submit"
                            value="Ver proyecto"
                        />
                    </form>
                    <a
                        class="icon-github porfolio__icons"
                        target="_blank"
                        href=${PROYECTS[i].repository}
                    ></a>
                </section>
            </section>
        </article>
        `;
        containerProyectsSection?.appendChild(article);
    }
};

const API_PROYECTS_JSON = proyects;
const PROYECTS = API_PROYECTS_JSON.proyects.reverse();
showProyects();
