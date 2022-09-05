/**
 * Brandon P. Williams
 * 
 * (212) ***-**** (best time: M-F 5p to 8p)
 * b***@gmail.com
 * https://www.linkedin.com/in/brandonpwilliams
 * 
 * Web and mobile developer proficient in PHP, Laravel, HTML, CSS, TypeScript, Javascript 2015/ES6, Angular, iOS (Swift, Xcode), NodeJS (Express), MySQL, REST, and more. Brooklyn College (CUNY) graduate.
 * 
 * Note: This code is TypeScript and must be compiled into Javascript to run.
 * You can use this or something similar: https://www.typescriptlang.org/play
 * 
 * Copyright: Brandon P. Williams, 2022
 */

abstract class Item {
    protected _title: string;
    protected _description: string;
  
    constructor(title: string, description: string) {
  	    this._title = title;
        this._description = description;
    }
}

class Experience extends Item {
    private _employer: string;
	private _start: Date;
    private _end?: Date;

    public get current(): boolean {
        return !this._end;
    }
  
    constructor(
        title: string, 
        description: string,
        employer: string,
        start: string, 
        end:string|undefined
    ) {
        super(title, description);
        this._employer = employer;
        this._start = new Date(start);
        if(end) this._end = new Date(end);
    }

    getInfo() {
        return `${this._employer}\n${this._title} | ${this._start.toLocaleDateString()} - ${this._end ? this._end.toLocaleDateString() : 'Present'}\n${this._description}`;
    }
}

class Education extends Item {
    private _degree: string;
    private _school: string;
    private _graduated: boolean;
  
    constructor(
        title: string, 
        description: string, 
        school: string,
        degree: string, 
        graduated: boolean
    ) {
        super(title, description);
        this._school = school;
        this._degree = degree;
        this._graduated = graduated;
    }

    getInfo() {
        return `${this._degree}${this._title ? (" | " + this._title)  : ""}\n${this._school}\n${this._description}`;
    }
}

class Candidate {
    private _name: string;
    private _phone: string;
    private _email: string;
    private _link: string; 
    private _summary: string;
    private _top_skills: string[] = [];
    private _experiences: Experience[] = [];
    private _education: Education[] = [];

    constructor(
        name: string,
        phone: string,
        email: string,
        link: string,
        summary: string,
        top_skills: string[] = [],
        experiences: {
            title:string, 
            description:string, 
            employer: string, 
            start:string, 
            end?:string
        }[] = [],
        education: {
            title:string,
            description:string,
            degree:string,
            school:string,
            graduated: boolean
        }[] = []
    ) {
        this._name = name;
        this._phone = phone;
        this._email = email;
        this._link = link;
        this._summary = summary

        for(const skill of top_skills) 
            this._top_skills.push(skill);
            
        for(const experience of experiences) 
            this._experiences.push(
                new Experience(
                    experience.title,
                    experience.description,
                    experience.employer,
                    experience.start,
                    experience.end
                )
            );
        for(const edu of education) 
            this._education.push(
                new Education(
                    edu.title, 
                    edu.description, 
                    edu.school,
                    edu.degree, 
                    edu.graduated
                )
            );
    }

    getInfo() {
        let info:string = `${this._name}\r\n${this._phone} | ${this._email}\n`;
        info += `\r\n${this._summary}\r\n`;

        if(this._top_skills.length) {
            info += "\r\n\r\nTOP SKILLS:\r\n";
            for(const skill of this._top_skills) {
                info += `\n- ${skill}`;
            }
            info += "\r\n";
        }

        if(this._experiences.length) {
            info += "\r\n\r\nEXPERIENCE:\r\n";
            for(const experience of this._experiences) {
                info += "\r\n" + experience.getInfo() + "\r\n";
            }
            info += "\r\n\r\n";
        }

        if(this._education.length) {
            info += "\r\n\r\nEDUCATION:\r\n";
            for(const edu of this._education) {
                info += "\r\n" + edu.getInfo() + "\r\n";
            }
            info += "\r\n\r\n";
        }
        return info;
    }
}

const brandon_williams = new Candidate(
    "Brandon Williams",
    "(212) ***-****",
    "b***@gmail.com",
    "https://www.linkedin.com/in/brandonpwilliams",
    "Web and mobile developer proficient in PHP, Laravel, HTML, CSS, TypeScript, Javascript 2015/ES6, Angular, iOS (Swift, Xcode), NodeJS (Express), MySQL, REST, and more. Brooklyn College (CUNY) graduate.",
    [
        "PHP", "Laravel","Lumen",
        "MySQL", "MongoDB",
        "TypeScript", "JavaScript","NodeJS", "Express",
        "Angular",
        "Mobile Development","Swift", "SwiftUI", "Nativescript", "Ionic",
        "AWS", "Heroku",
        "Git", "Github", "Jira", "Bitbucket"
    ],
    [
        {
            title: "Web and Mobile Developer",
            employer: "Meditrial USA",
            start: "2020-08-24",
            description: "Core responsibilities:\r\nSoftware development: developing new products and features, primarily using Angular on the frontend for web and mobile development and PHP frameworks on the backend.\r\nUAT: Thoroughly testing integrity of frontend and backend code.\r\nIT Support: Setting up, maintaining and troubleshooting office hardware and software systems, including audio/video equipment.\r\nOffering professional photography and video production skills to help further the marketing efforts of the company."
        },{
            title: "Full-Stack Developer",
            employer: "WSG",
            start: "2017-08-01",
            end: "2020-08-21",
            description: 
                "Web development agency servicing all development needs of medium and small-size businesses. Built, maintained, and expanded many different types of projects and performed everything from short-term bug fixes to long-term projects building large custom systems using both frontend and backend technologies. Worked on custom shopping carts, including secure checkout and customer retention systems. \r\n- Binance/GDAX cryptocurrency web client which displays up-to-date price data and allows transactions to be performed.\r\n- Web platform for employers to manage their employees and submit WOTC data to SWA’s."
        },{
            title: "Lead Software Engineer and Owner",
            employer: "8th Base",
            start: "2013-12-13",
            end: "2020-08-21",
            description: "Premium custom web and mobile development and consulting for medium and small-size organizations."
        }
    ],
    [
        {
            title: "Finance and Business Management",
            degree: "Bachelor of Science",
            school: "City University of New York - Brooklyn College",
            description: 
                "Some key courses:\n- Computing: Nature, Power, and Limits\n- Intro Programming In C++\n- Business Communication \n- Finance \n- Mathematical Economics 1 \n- Operations Management \n- Principles of Marketing Management \n- Seminar in Marketing Research \n- Spanish 3",
            graduated: true
        },{
            title: "Business Administration",
            degree: "Associate of Applied Science",
            school: "Kingsborough Community College",
            description: "",
            graduated: true
        },{
            title: "",
            degree: "High School Diploma",
            school: "East Stroudsburg High School South",
            description: "",
            graduated: true
        }
    ]
);

console.log(brandon_williams.getInfo());
