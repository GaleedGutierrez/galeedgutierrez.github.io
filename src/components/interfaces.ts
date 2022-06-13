export interface Proyect {
    id: number;
    name: string;
    technologies: string[];
    technologiesIcons: string[];
    repository: string;
    url: string[] | string;
    img: string;
    date: string;
    course: CoursePlataform;
    description: string;
    author: string;
}

export interface CoursePlataform {
    name: string;
    platform: string;
    url: string;
    img: string;
}
