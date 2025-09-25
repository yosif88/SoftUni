abstract class Course {
    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    public abstract getDescription(): string;
}

class ProgrammingCourse extends Course {
    language: string;

    constructor(title: string, duration: number, language: string) {
        super(title, duration);
        this.language = language;
    }

    public getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`
    }
}

class DesignCourse extends Course {
    tools: string[];

    constructor(title: string, duration: number, tools: string[]){
        super(title, duration);
        this.tools= tools;
    }

    public getDescription(): string {
        return `Design Course: ${this.title} using ${this.tools.join(', ')} - ${this.duration} hours`
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);

console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());