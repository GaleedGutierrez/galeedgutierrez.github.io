// Projects
export interface CoursePlatform {
	name: string;
	platform: string;
	url: string;
	img: string;
}

export interface Project {
	id: number;
	name: string;
	technologies: string[];
	technologiesIcons: string[];
	repository: string;
	url: string;
	img: string;
	date: string;
	course: CoursePlatform;
	description: string;
	author: string;
}

// Radio Inputs
export interface objInputRadioType {
	[key: string]: () => boolean;
}

// Particle JS
export interface Onclick {
	enable: boolean;
	mode: string;
}

export interface Bubble {
	distance: number;
	size: number;
	duration: number;
	opacity: number;
	speed: number;
}

export interface GrabLineLinked {
	opacity: number;
}

export interface Grab {
	distance: number;
	line_linked: GrabLineLinked;
}

export interface Push {
	particles_nb: number;
}

export interface Repulse {
	distance: number;
	duration: number;
}

export interface Color {
	value: string;
}

export interface ParticlesLineLinked {
	enable: boolean;
	distance: number;
	color: string;
	opacity: number;
	width: number;
}

export interface Attract {
	enable: boolean;
	rotateX: number;
	rotateY: number;
}

export interface Move {
	enable: boolean;
	speed: number;
	direction: string;
	random: boolean;
	straight: boolean;
	out_mode: string;
	bounce: boolean;
	attract: Attract;
}

export interface Density {
	enable: boolean;
	value_area: number;
}

export interface NumberDensity {
	value: number;
	density: Density;
}

export interface Anim {
	enable: boolean;
	speed: number;
	opacity_min?: number;
	sync: boolean;
	size_min?: number;
}

export interface Opacity {
	value: number | number;
	random: boolean;
	anim: Anim;
}

export interface Image {
	src: string;
	width: number;
	height: number;
}

export interface Polygon {
	nb_sides: number;
}

export interface Stroke {
	width: number;
	color: string;
}

export interface Shape {
	type: string;
	stroke: Stroke;
	polygon: Polygon;
	image: Image;
}

export interface Modes {
	grab: Grab;
	bubble: Bubble;
	repulse: Repulse;
	push: Push;
	remove: Push;
}

export interface Events {
	onhover: Onclick;
	onclick: Onclick;
	resize: boolean;
}

export interface Interactivity {
	detect_on: string;
	events: Events;
	modes: Modes;
}

export interface Particles {
	number: NumberDensity;
	color: Color;
	shape: Shape;
	opacity: Opacity;
	size: Opacity;
	line_linked: ParticlesLineLinked;
	move: Move;
}

export interface ParticlesJsConfig {
	particles: Particles;
	interactivity: Interactivity;
	retina_detect: boolean;
}
