import TechMap from "./TechMap";

// TODO: Update
const ExperiencesDetails = [
    {
        company: "Google",
        role: "Software Engineer Intern",
        period: "May 2022 - August 2022",
        descriptionList: [
            "Worked with the CameraX team to develop an Android application in Jetpack Compose",
            "The application serves as a proof-of-concept for the Android ecosystem, to test the compatibility of the two libraries and shape the API direction of CameraX",
            "Designed the application architecture with Jetpack Compose",
            "Developed the application to support core CameraX functionalities such as capturing images, video taking, supporting flash, zoom and tap-to-focus",
            "Create integrations tests to ensure proper integration of the two libraries",
        ],
        technologies: [
            TechMap.android,
            TechMap.androidStudio,
            TechMap.kotlin,
            TechMap.git,
        ],
    },
    {
        company: "ByteDance",
        role: "Backend Engineer Intern",
        period: "Jan 2022 - April 2022",
        descriptionList: [
            "Worked with the Technical Infrastructure team to create services supporting ByteDance daily operations",
            "I was part of the Cloud Platform that supports developers in creating and maintaining services",
            "Designed and implemented an Administrator Interface that allow maintainers to manage their databases without writing SQL code",
            "Updated and optimised legacy API endpoints to improve backend services on the Cloud",
        ],
        technologies: [TechMap.python, TechMap.django, TechMap.git],
    },
    {
        company: "Net6tem",
        role: "Software Engineer Intern",
        period: "May 2021 - August 2021",
        descriptionList: [
            "Developed a Web Application to serve Net6tem's Human Resources department in managing internal operations",
            "Conceptualised UI/UX designs, Wireframes, Use Cases and User Stories.",
            "Designed and implemented front-end pages and navigation architecture in React.js",
            "Created a backend server in Node.js and managed data on a MySQL database",
        ],
        technologies: [
            TechMap.react,
            TechMap.nodejs,
            TechMap.express,
            TechMap.mysql,
            TechMap.git,
        ],
    },
    {
        company: "National University of Singapore",
        role: "Teaching Assistant",
        period: "June 2020 - August 2020",
        descriptionList: [
            "CS2030: Programming Methodology II",
            "Trained students in Object-Oriented Programming and Functional Programming techniques",
            "Planned and prepared lab materials, provided feedback on code quality on the students’ weekly assignments",
        ],
        technologies: [TechMap.java],
    },
];

export default ExperiencesDetails;
