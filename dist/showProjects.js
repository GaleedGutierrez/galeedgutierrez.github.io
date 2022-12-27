import { CONTAINER_PROJECTS_SECTION } from './components/htmlElements.js';
import projects from './components/API/projects.json' assert { type: 'json' };
export const showProjects = (lengthProjects) => {
    for (let i = 0; i < lengthProjects; i++) {
        const ARTICLE = document.createElement('article');
        let iconsTechnologies = '';
        ARTICLE.setAttribute('class', 'portfolio__data-container');
        for (let j = 0; j < PROJECTS[i].technologies.length; j++) {
            const IS_PUG = PROJECTS[i].technologies[j] === 'PUG';
            iconsTechnologies += `<figure class="technologies__icon-figure ${(IS_PUG)
                ? 'technologies__pug-icon'
                : ''}">
				<img id="" src="${PROJECTS[i].technologiesIcons[j]}" alt="Icon ${PROJECTS[i].technologies[j]}" loading="lazy"/>
			</figure>`;
        }
        ARTICLE.innerHTML = `
		<section>
			<figure>
				<img
					class="project-container__img"
					src=${PROJECTS[i].img}
					alt="Screenshot de ${PROJECTS[i].name}"
					loading="lazy"
				/>
			</figure>
			<section
				class="project-container__technologies-container"
			>
				${iconsTechnologies}
			</section>
		</section>
		<section class="portfolio__info-container">
			<h3>${PROJECTS[i].name}</h3>
			<p>
				${PROJECTS[i].description}
			</p>
			<a class="portfolio__courses-section" target="_blank" href=${PROJECTS[i].course.url} >
				<figure
					class="courses-section__course-icon-figure"
				>
					<img
						src=${PROJECTS[i].course.img}
						alt="Logo del ${PROJECTS[i].course.name}"
						loading="lazy"
					/>
				</figure>
				<p class="courses-section__course-name">
					${PROJECTS[i].course.name}
				</p>
				<p class="courses-section__platform">
					${PROJECTS[i].course.platform}
				</p>
			</a>
			<section class="portfolio__view-project">
				<form target="_blank" action=${PROJECTS[i].url}>
					<input
						class="button"
						type="submit"
						value="Ver proyecto"
					/>
				</form>
				<a
					aria-label="Github"
					target="_blank"
					href=${PROJECTS[i].repository}
				>
					<i class="icon-github social-media__icons porfolio__icons"></i>
				</a>
			</section>
		</section>
		`;
        CONTAINER_PROJECTS_SECTION?.appendChild(ARTICLE);
    }
};
const API_PROJECTS_JSON = projects;
export const PROJECTS = API_PROJECTS_JSON.projects.reverse();
showProjects(6);
