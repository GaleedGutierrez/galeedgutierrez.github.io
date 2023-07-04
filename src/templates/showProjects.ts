import { CONTAINER_PROJECTS_SECTION } from '@utils/nodes';
import { PROJECTS } from '@utils/projects';

const createIcons = (technologies: string[], technologiesIcons: string[]) => {
	return technologiesIcons.map((icon, index) => {
		const FIGURE = document.createElement('figure');
		const IMG = document.createElement('img');

		FIGURE.className = 'm-project-card__technology-icon';
		IMG.src = icon;
		IMG.alt = `Icono de ${technologies[index]}`;
		IMG.loading = 'lazy';
		FIGURE.append(IMG);

		return FIGURE;
	});
};

const showProjects = (lengthProjects: number): void => {
	const GITHUB_ICON =
		'<svg class="a-icon a-social-media-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32"><title>Github</title><path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path></svg>';
	const ALL_PROJECTS: HTMLElement[] = [];

	for (let i = 0; i < lengthProjects; i++) {
		const ARTICLE = document.createElement('article');
		const iconsTechnologies = createIcons(
			PROJECTS[i].technologies,
			PROJECTS[i].technologiesIcons
		);

		ARTICLE.setAttribute('class', 'm-project-card');

		// Project screenshot and technologies
		const SECTION_PROJECT = document.createElement('section');
		const FIGURE_PROJECT = document.createElement('figure');
		const IMG_PROJECT = document.createElement('img');
		const TECHNOLOGIES_ICONS_CONTAINER = document.createElement('div');

		// Create image project and append technologies's icons
		IMG_PROJECT.src = PROJECTS[i].img;
		IMG_PROJECT.alt = `Screenshot de ${PROJECTS[i].name}`;
		IMG_PROJECT.className = 'm-project-card__img-project';
		IMG_PROJECT.loading = 'lazy';
		FIGURE_PROJECT.append(IMG_PROJECT);
		TECHNOLOGIES_ICONS_CONTAINER.className =
			'm-project-card__technology-icons-container';
		TECHNOLOGIES_ICONS_CONTAINER.append(...iconsTechnologies);
		SECTION_PROJECT.append(FIGURE_PROJECT, TECHNOLOGIES_ICONS_CONTAINER);

		// Details of project
		const SECTION_DETAILS = document.createElement('section');
		const TITLE = document.createElement('h3');
		const DESCRIPTION = document.createElement('p');
		const LINK_COURSE_CONTAINER = document.createElement('a');
		const COURSE_ICON_FIGURE = document.createElement('figure');
		const COURSE_ICON = document.createElement('img');
		const COURSE_NAME = document.createElement('p');
		const COURSE_PLATFORM = document.createElement('p');
		const DESCRIPTION_CONTAINER = document.createElement('div');
		const PROJECT_BUTTON = document.createElement('a');
		const GITHUB_ICON_LINK = document.createElement('a');

		// Create course's information and append it to the details of the project
		SECTION_DETAILS.className = 'm-project-card__data-container';
		TITLE.innerText = PROJECTS[i].name;
		DESCRIPTION.innerText = PROJECTS[i].description;

		LINK_COURSE_CONTAINER.target = '_blank';
		LINK_COURSE_CONTAINER.href = PROJECTS[i].course.url;
		LINK_COURSE_CONTAINER.className = 'm-project-card__course-info';

		COURSE_ICON_FIGURE.className = 'm-project-card__course-icon';

		COURSE_ICON.src = PROJECTS[i].course.img;
		COURSE_ICON.alt = `Logo del ${PROJECTS[i].course.name}`;
		COURSE_ICON.loading = 'lazy';

		COURSE_ICON_FIGURE.append(COURSE_ICON);

		COURSE_NAME.className = 'm-project-card__course-name';
		COURSE_NAME.innerText = PROJECTS[i].course.name;

		COURSE_PLATFORM.className = 'm-project-card__course-platform';
		COURSE_PLATFORM.innerText = PROJECTS[i].course.platform;

		LINK_COURSE_CONTAINER.append(
			COURSE_ICON_FIGURE,
			COURSE_NAME,
			COURSE_PLATFORM
		);

		// Create button and GitHub icon, and append it to the details of the project
		DESCRIPTION_CONTAINER.className =
			'm-project-card__view-project-section';

		PROJECT_BUTTON.innerText = 'Ver proyecto';
		PROJECT_BUTTON.target = '_blank';
		PROJECT_BUTTON.href = PROJECTS[i].url;
		PROJECT_BUTTON.className = 'a-button';

		GITHUB_ICON_LINK.target = '_blank';
		GITHUB_ICON_LINK.ariaLabel = 'Github';
		GITHUB_ICON_LINK.href = PROJECTS[i].repository;
		GITHUB_ICON_LINK.innerHTML = GITHUB_ICON;

		DESCRIPTION_CONTAINER.append(PROJECT_BUTTON, GITHUB_ICON_LINK);

		SECTION_DETAILS.append(
			TITLE,
			DESCRIPTION,
			LINK_COURSE_CONTAINER,
			DESCRIPTION_CONTAINER
		);

		ARTICLE.append(SECTION_PROJECT, SECTION_DETAILS);
		ALL_PROJECTS.push(ARTICLE);
	}

	CONTAINER_PROJECTS_SECTION.append(...ALL_PROJECTS);
};

export default showProjects;
