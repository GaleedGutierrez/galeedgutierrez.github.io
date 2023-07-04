// Icons Courses
import CURSO_CSS_GRID_BASICO_PLATZI from '@images/icons/courses/curso-css-grid-basico.webp';
import CURSO_DE_ANIMACIONES_CON_CSS_PLATZI from '@images/icons/courses/Curso-de-Animaciones-con-CSS.webp';
import CURSO_DE_CONSUMO_DE_API_REST_CON_JAVASCRIPT_PLATZI from '@images/icons/courses/curso-de-consumo-de-api-rest-con-javaScript.webp';
import CURSO_DE_CSS_GRID_LAYOUT_2017 from '@images/icons/courses/curso-de-css-grid-layout-2017.webp';
import CURSO_DE_DISENO_PARA_PROGRAMADORES from '@images/icons/courses/curso-de-diseno-para-programadores.webp';
import CURSO_DE_FRONTEND_DEVELOPER_PLATZI from '@images/icons/courses/curso-de-frontend-developer.webp';
import CURSO_DE_FRONTEND_DEVELOPER_2019_PLATZI from '@images/icons/courses/curso-de-frontend-developer-2019.webp';
import CURSO_DE_HTML_Y_CSS_2019_PLATZI from '@images/icons/courses/curso-de-html-y-css-2019.webp';
import CURSO_DE_INTRODUCCION_A_EMPAQUETADORES_WEB_ICON from '@images/icons/courses/curso-de-introduccion-a-empaquetadores-web.webp';
import CURSO_DE_RESPONSIVE_DESIGN_LEONIDAS_ESTEBAN_PLATZI from '@images/icons/courses/curso-de-responsive-design-leonidas-esteban.webp';
import CURSO_DE_RESPONSIVE_DESIGN_MAQUETACION_MOBILE_FIRST_PLATZI from '@images/icons/courses/Curso-de-Responsive-Design-Maquetación-Mobile-First.webp';
import CURSO_DE_SPA_CON_JAVASCRIPT_VANILLA_2021 from '@images/icons/courses/curso-de-single-page-application-con-javaScript-vanilla-2021.webp';
import CURSO_GRATIS_DE_PROGRAMACION_BASICA_OLD_PLATZI from '@images/icons/courses/curso-gratis-de-programacion-basica.webp';
import CURSO_PRACTICO_DE_HTML_Y_CSS_PLATZI from '@images/icons/courses/curso-practico-de-html-y-css.webp';
import CURSO_PRACTICO_DE_JAVASCRIPT_PLATZI from '@images/icons/courses/curso-practico-de-javascript.webp';
import CURSO_PRACTICO_DE_MAQUETACION_CSS from '@images/icons/courses/curso-practico-de-maquetacion-en-css.webp';
import CURSO_PRACTICO_DE_MAQUETACION_Y_ANIMACIONES_CON_CSS_ICON from '@images/icons/courses/curso-practico-de-maquetacion-y-animaciones-con-css.webp';
import TALLER_PRACTICO_DE_JAVASCRIPT_CREA_TU_PRIMER_VIDEOJUEGO_PLATZI from '@images/icons/courses/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.webp';
import ALURA_ICON from '@images/icons/platform/alura.webp';
// icons Technologies
import CSS_ICON from '@images/icons/technologies/css/icons-css3-small.webp';
import HTML_ICON from '@images/icons/technologies/html/icon-html-small.webp';
import JAVASCRIPT_ICON from '@images/icons/technologies/javascript/icons-javascript-small.webp';
import PUG_ICON from '@images/icons/technologies/pug/pug-icon.webp';
import SASS_ICON from '@images/icons/technologies/sass/icons-sass-small.webp';
import TYPESCRIPT_ICON from '@images/icons/technologies/typescript/icons-typescript-small.webp';
import VITEJS_ICON from '@images/icons/technologies/vitejs/vitejs.webp';
import WEBPACK_ICON from '@images/icons/technologies/webpack/icons-webpack-small.webp';
// Projects Images
import CIENTIFICO_CO from '@images/img/screenshot-projects/100rifi.co.webp';
import BATABIT from '@images/img/screenshot-projects/batabit.webp';
import BRAND from '@images/img/screenshot-projects/brand.webp';
import CHECK_THE_BEST_FOOD from '@images/img/screenshot-projects/check-the-best-food.webp';
import ANIMATIONLAND from '@images/img/screenshot-projects/curso-de-animaciones-con-css.webp';
import YARD_SALE from '@images/img/screenshot-projects/curso-practico-de-frontend-developer.webp';
import TALLER_N1_CURSO_DE_PROGRAMACION_ORIENTADA_A_OBJETOS_EN_JAVASCRIPT from '@images/img/screenshot-projects/curso-practico-de-javaScript.webp';
import TALLER_N2_CURSO_DE_PROGRAMACION_ORIENTADA_A_OBJETOS_EN_JAVASCRIPT from '@images/img/screenshot-projects/curso-practico-de-javascript-02.webp';
import ENCRIPTADOR_DE_TEXT_ALURA_ONE from '@images/img/screenshot-projects/encriptador-de-texto-alura-challenges-one.webp';
import GOOGLE_CLONE from '@images/img/screenshot-projects/google-clone.webp';
import LEGO from '@images/img/screenshot-projects/lego.webp';
import MY_BLOG from '@images/img/screenshot-projects/mi-blog.webp';
import MICHI_APP from '@images/img/screenshot-projects/michis-app.webp';
import MOVIE_ES from '@images/img/screenshot-projects/movie.es.webp';
import MY_LINK_IN_BIO from '@images/img/screenshot-projects/my-link-in-bio.webp';
import PLATZI_VIDEO_2017 from '@images/img/screenshot-projects/platzi-video.webp';
import PLATZI_VIDEO from '@images/img/screenshot-projects/platzi-video-curso-frontend-developer-2019.webp';
import PLATZIV from '@images/img/screenshot-projects/Platziv-juego-online.webp';
import PORTFOLIO_LEONIDAS_ESTEBAN from '@images/img/screenshot-projects/portfolio-leonidas-esteban.webp';
import GENERADOR_DE_FIGURAS from '@images/img/screenshot-projects/proyecto-generador-de-figuras.webp';
import STREAM_BURGER from '@images/img/screenshot-projects/steam.webp';
import VILLA_PLATZI from '@images/img/screenshot-projects/villa-platzi.webp';
import WIKIPEDIA_CLONE from '@images/img/screenshot-projects/wikipedia-clone.webp';
import { Project } from '@interface/interfaces';

export const PROJECTS: Project[] = [
	{
		id: 22,
		name: 'LEGO',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJs'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITEJS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021/dist/',
		img: LEGO,
		date: '2023-04-22T03:00:00.000Z',
		course: {
			name: 'Curso Practico de Maquetacion y Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/animaciones-css-practico/',
			img: CURSO_PRACTICO_DE_MAQUETACION_Y_ANIMACIONES_CON_CSS_ICON,
		},
		description:
			'En este proyecto 🚀, cree una página web con temática de LEGO, utilizando diferentes técnicas de animación para darle vida y dinamismo al sitio. 🎨',
		author: 'Galeed Gutierrez',
	},
	{
		id: 21,
		name: '100tifi.co',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJs'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITEJS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021',
		url: 'https://galeedgutierrez.com/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021/dist/public/index.html',
		img: CIENTIFICO_CO,
		date: '2023-04-12T03:00:00.000Z',
		course: {
			name: 'Curso de Single Page Application con JavaScript Vanilla 2021',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/spa-javascript/',
			img: CURSO_DE_SPA_CON_JAVASCRIPT_VANILLA_2021,
		},
		description:
			'Web 🌐 que usa API de rickandmortyapi.com para ver detalles de personajes de “Rick y Morty” 🧪.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 20,
		name: 'Encriptador de texto',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJs'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITEJS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Encriptador-de-texto-Alura-Challenges-ONE-2023',
		url: 'https://galeedgutierrez.com/Encriptador-de-texto-Alura-Challenges-ONE-2023/dist/',
		img: ENCRIPTADOR_DE_TEXT_ALURA_ONE,
		date: '2023-04-01T03:00:00.000Z',
		course: {
			name: 'Challenge ONE: Principiante en programación',
			platform: 'Alura',
			url: 'https://www.aluracursos.com/',
			img: ALURA_ICON,
		},
		description:
			'Encriptación y desencriptación de texto 📋 con un algoritmo de sustitución de vocales 🔡.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 19,
		name: 'Link in bio',
		technologies: ['TypeScript', 'SASS', 'HTML', 'Webpack'],
		technologiesIcons: [
			TYPESCRIPT_ICON,
			SASS_ICON,
			HTML_ICON,
			WEBPACK_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Introduccion-a-Empaquetadores-Web/tree/main/webpack',
		url: 'https://galeedgutierrez.com/Curso-de-Introduccion-a-Empaquetadores-Web/webpack/dist/index.html',
		img: MY_LINK_IN_BIO,
		date: '2023-03-11T03:00:00.000Z',
		course: {
			name: 'Curso de Introducción a Empaquetadores Web',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/empaquetadores/',
			img: CURSO_DE_INTRODUCCION_A_EMPAQUETADORES_WEB_ICON,
		},
		description:
			'Es un ejemplo de un link in bio 🔗, que dirige a una página con varios enlaces de redes sociales 📱 y otros sitios de interés 💡.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 18,
		name: 'Platziv - Juego Online',
		technologies: [
			'PUG',
			'SASS',
			'TypeScript',
			'HTML',
			'CSS',
			'JavaScript',
		],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			TYPESCRIPT_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022',
		url: 'https://galeedgutierrez.com/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022/html/index.html',
		img: PLATZIV,
		date: '2022-11-09T03:00:00.000Z',
		course: {
			name: 'Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/javascript-practico-videojuegos/',
			img: TALLER_PRACTICO_DE_JAVASCRIPT_CREA_TU_PRIMER_VIDEOJUEGO_PLATZI,
		},
		description:
			'El juego trata de un programador 👨‍💻 que tiene que llegar a su meta ✅ evitando los diferentes bugs 👾 que puede tener en el camino.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 17,
		name: 'Michi App',
		technologies: [
			'PUG',
			'SASS',
			'TypeScript',
			'HTML',
			'CSS',
			'JavaScript',
		],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			TYPESCRIPT_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Consumo-de-API-REST-con-JavaScript',
		url: 'https://galeedgutierrez.com/Curso-de-Consumo-de-API-REST-con-JavaScript/html/',
		img: MICHI_APP,
		date: '2022-05-01T03:00:00.000Z',
		course: {
			name: 'Curso de Consumo de API REST con JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2985-api/48425-que-es-una-api-rest/',
			img: CURSO_DE_CONSUMO_DE_API_REST_CON_JAVASCRIPT_PLATZI,
		},
		description:
			'Una página que consume una API REST de gatitos, se pueden agregar y eliminar gatitos en favoritos.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 16,
		name: 'Figura Geométricas',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS', 'JavaScript'],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/tree/main/TallerN1',
		url: 'https://galeedgutierrez.com/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/TallerN1/html/',
		img: TALLER_N1_CURSO_DE_PROGRAMACION_ORIENTADA_A_OBJETOS_EN_JAVASCRIPT,
		date: '2022-02-01T03:00:00.000Z',
		course: {
			name: 'Curso de Programación Orientada a Objetos en JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2332-javascript-poo/38616-javascript-orientado-a-objetos-basado-en-prototipo/',
			img: CURSO_PRACTICO_DE_JAVASCRIPT_PLATZI,
		},
		description:
			'Página para poder calcular el perímetro y área de una figura geométrica.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 15,
		name: 'Tienda Online',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS', 'JavaScript'],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-JavaScript/tree/main/TallerN2',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-JavaScript/TallerN2/html/',
		img: TALLER_N2_CURSO_DE_PROGRAMACION_ORIENTADA_A_OBJETOS_EN_JAVASCRIPT,
		date: '2021-12-01T03:00:00.000Z',
		course: {
			name: 'Curso Practico de JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2327-javascript-practico/38654-cual-es-tu-sueno-con-javascript/',
			img: CURSO_PRACTICO_DE_JAVASCRIPT_PLATZI,
		},
		description:
			'Página calculadora del total a pagar después de aplicar un cupón de descuento.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 14,
		name: 'Animationland',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Animaciones-con-CSS',
		url: 'https://galeedgutierrez.com/Curso-de-Animaciones-con-CSS/html/',
		img: ANIMATIONLAND,
		date: '2021-12-01T03:00:00.000Z',
		course: {
			name: 'Curso de Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2337-animaciones-css/37995-sabes-mas-de-animaciones-de-lo-que-crees/',
			img: CURSO_DE_ANIMACIONES_CON_CSS_PLATZI,
		},
		description: 'Una pequeña animación con el perrito de Chems.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 13,
		name: 'Check the best food',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-CSS-Grid-Basico',
		url: 'https://galeedgutierrez.com/Curso-de-CSS-Grid-Basico/Proyecto/',
		img: CHECK_THE_BEST_FOOD,
		date: '2021-11-01T03:00:00.000Z',
		course: {
			name: 'Curso de CSS Grid Básico',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2474-css-grid/42182-que-es-css-grid-layout/',
			img: CURSO_CSS_GRID_BASICO_PLATZI,
		},
		description: 'Maquetación de una página para un restaurante.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 12,
		name: 'Batabit',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Responsive-Design-Maquetacion-Mobile-First',
		url: 'https://galeedgutierrez.com/Curso-de-Responsive-Design-Maquetacion-Mobile-First/html/',
		img: BATABIT,
		date: '2021-11-01T03:00:00.000Z',
		course: {
			name: 'Curso de Responsive Design: Maquetación Mobile First',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2030-mobile-first/33326-introduccion-al-curso/',
			img: CURSO_DE_RESPONSIVE_DESIGN_MAQUETACION_MOBILE_FIRST_PLATZI,
		},
		description:
			'Maquetación de una página para ver la cotización de criptomonedas.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 11,
		name: 'Yard Sale',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Frontend-Developer',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Frontend-Developer/html/homepage.html',
		img: YARD_SALE,
		date: '2021-10-01T03:00:00.000Z',
		course: {
			name: 'Curso de Frontend Developer',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2477-frontend-developer-practico/41501-ya-tomaste-el-curso-de-frontend-developer/',
			img: CURSO_DE_FRONTEND_DEVELOPER_PLATZI,
		},
		description: 'Maquetación de una tienda online.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 10,
		name: 'Steam Burger',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Disenio-para-Programadores',
		url: 'https://galeedgutierrez.com/Curso-de-Disenio-para-Programadores/html/',
		img: STREAM_BURGER,
		date: '2021-09-01T03:00:00.000Z',
		course: {
			name: 'Curso de Diseño para Developers',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1906-diseno-programadores/28549-bienvenida/',
			img: CURSO_DE_DISENO_PARA_PROGRAMADORES,
		},
		description: 'Página web para un restaurante.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 9,
		name: 'Platzi Video',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Frontend-Developer-2019',
		url: 'https://galeedgutierrez.com/Curso-de-Frontend-Developer-2019/platzi-video/html/homepage.html',
		img: PLATZI_VIDEO,
		date: '2021-09-01T03:00:00.000Z',
		course: {
			name: 'Curso de Frontend Developer 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1640-frontend-developer-2019/21874-presentacion-y-bienvenida-al-curso-de-frontend-dev/',
			img: CURSO_DE_FRONTEND_DEVELOPER_2019_PLATZI,
		},
		description:
			'Maquetación del home, login, registro y page not found de Platzi Video.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 8,
		name: 'Wikipedia Clone',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/WikipediaClone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/WikipediaClone/',
		img: WIKIPEDIA_CLONE,
		date: '2021-09-01T03:00:00.000Z',
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			img: CURSO_PRACTICO_DE_HTML_Y_CSS_PLATZI,
		},
		description: 'Un clone del home de Wikipedia.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 7,
		name: 'Google Clone',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/my-Google-clone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/my-Google-clone/',
		img: GOOGLE_CLONE,
		date: '2021-09-01T03:00:00.000Z',
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			img: CURSO_PRACTICO_DE_HTML_Y_CSS_PLATZI,
		},
		description: 'Un clone de la clásica página de búsqueda de Google.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 6,
		name: 'Villa Platzi',
		technologies: ['HTML', 'JavaScript'],
		technologiesIcons: [HTML_ICON, JAVASCRIPT_ICON],
		repository: 'https://github.com/GaleedGutierrez/Villa-Platzi',
		url: 'https://galeedgutierrez.com/Villa-Platzi/',
		img: VILLA_PLATZI,
		date: '2021-01-01T03:00:00.000Z',
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			img: CURSO_GRATIS_DE_PROGRAMACION_BASICA_OLD_PLATZI,
		},
		description: 'Una pequeña granja en donde puedes mover a un cerdo.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 5,
		name: 'Generador de figuras geométricas',
		technologies: ['HTML', 'JavaScript'],
		technologiesIcons: [HTML_ICON, JAVASCRIPT_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Proyecto-generador-de-figuras',
		url: 'https://galeedgutierrez.com/Proyecto-generador-de-figuras/',
		img: GENERADOR_DE_FIGURAS,
		date: '2021-01-01T03:00:00.000Z',
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			img: CURSO_GRATIS_DE_PROGRAMACION_BASICA_OLD_PLATZI,
		},
		description: 'Generador de figuras geométricas.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 4,
		name: 'Mi Blog',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/galeedgutierrez.github.io',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-en-CSS/html/',
		img: MY_BLOG,
		date: '2020-07-01T03:00:00.000Z',
		course: {
			name: 'Curso Práctico de Maquetación en CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1744-practico-css/24710-lo-que-aprenderas-sobre-maquetacion-en-css/',
			img: CURSO_PRACTICO_DE_MAQUETACION_CSS,
		},
		description: 'Maquetación de un blog personal.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 3,
		name: 'Platzi-Video',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Platzi-Video',
		url: 'https://galeedgutierrez.com/Platzi-Video/',
		img: PLATZI_VIDEO_2017,
		date: '2020-05-01T03:00:00.000Z',
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			img: CURSO_DE_CSS_GRID_LAYOUT_2017,
		},
		description: 'Maquetación de una web reproductora de videos.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 2,
		name: 'Movie.es',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Movi.es',
		url: 'https://galeedgutierrez.com/Movi.es/',
		img: MOVIE_ES,
		date: '2020-05-01T03:00:00.000Z',
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			img: CURSO_DE_CSS_GRID_LAYOUT_2017,
		},
		description: 'Maquetación de una página de películas y series.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 1,
		name: 'Portfolio Leonidas Esteban',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Portafolio-LeonidasEsteban',
		url: 'https://galeedgutierrez.com/Portafolio-LeonidasEsteban/',
		img: PORTFOLIO_LEONIDAS_ESTEBAN,
		date: '2020-02-01T03:00:00.000Z',
		course: {
			name: 'Curso de Responsive Design',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1362-responsive-design/13534-bienvenidos-al-curso-de-responsive-design/',
			img: CURSO_DE_RESPONSIVE_DESIGN_LEONIDAS_ESTEBAN_PLATZI,
		},
		description:
			'Página web para presentar los proyectos de Leonidas Esteban.',
		author: 'Galeed Gutierrez',
	},
	{
		id: 0,
		name: 'Brand',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Brand-Platzi',
		url: 'https://galeedgutierrez.com/Brand-Platzi/',
		img: BRAND,
		date: '2020-01-01T03:00:00.000Z',
		course: {
			name: 'Curso de HTML y CSS 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1492-html-css-2019/16971-introduccion-al-curso-profesional-de-desarrollo-we/',
			img: CURSO_DE_HTML_Y_CSS_2019_PLATZI,
		},
		description:
			'Mi primer proyecto web, es una tienda de gatitos muy simple que usa PayPal para procesar los pagos.',
		author: 'Galeed Gutierrez',
	},
];
