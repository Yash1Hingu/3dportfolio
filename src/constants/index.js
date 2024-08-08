import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    mysql,
    github,
    postman,
    vscode,
    vite,
    java
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "NextJS Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "mysql",
        icon: mysql,
    },
    {
        name: "java",
        icon: java,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
];

const experiences = [
    {
        title: "Senior School (12th)",
        company_name: "Anand High School",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Octobar 2021",
        points: [
            "Percentage: 73.20% (GSEB)"
        ],
    },
    {
        title: "Bachelor Technology",
        company_name: "Parul University",
        icon: starbucks,
        iconBg: "#383E56",
        date: "November 2021 - Present",
        points: [
            "Computer Science and Engineering",
            "CGPA: 8.7/10"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Yash Blogs",
        description:
            "Developed a blogging app with user registration, login, and blog management. Implemented access control and profile viewing. Designed a responsive UI with ReactJS and TailwindCSS, using MongoDB for data storage.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "express.js",
                color: "white-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Yash1Hingu/yashblog",
    },
    {
        name: "Airbnb Clone",
        description:
            "Introducing HomelyHub, a cutting-edge platform that redefines the way you travel and host. This Airbnb clone offers a seamless and user-friendly experience for both guests and hosts, providing a one-stop solution for accommodation needs",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "express.js",
                color: "white-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Yash1Hingu/airbnb",
    },
    {   
        name: "Travellify (Acehack3.0)",
        description:
            "Travellify simplifies travel blogging and content sharing, letting enthusiasts showcase adventures, culture, and cuisine. It fosters community engagement through likes and comments, helping travelers connect and inspire each other.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "express.js",
                color: "white-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Yash1Hingu/Travellify",
    },
];

export { services, technologies, experiences, testimonials, projects };