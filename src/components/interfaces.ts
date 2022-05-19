export interface Proyect {
    id: number;
    name: string;
    technologies: string[];
    repository: string;
    url: string[] | string;
    img: string;
    date: Date;
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
