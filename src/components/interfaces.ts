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
