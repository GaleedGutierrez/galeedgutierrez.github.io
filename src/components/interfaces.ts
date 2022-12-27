export interface ProjectInterface {
	id: number;
	name: string;
	technologies: string[];
	technologiesIcons: string[];
	repository: string;
	url: string[] | string;
	img: string;
	date: string;
	course: CoursePlatformInterface;
	description: string;
	author: string;
}

export interface CoursePlatformInterface {
	name: string;
	platform: string;
	url: string;
	img: string;
}
