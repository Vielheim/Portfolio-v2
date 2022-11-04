import TechMap from "./TechMap";

const ProjectDetails = [
    {
        title: "Resume Review Portal",
        description:
            "Resume Review Portal allows anyone to upload their resumes and source for community feedback to improve their job/internship preparation. A project of CS3216 Software Product Engineering for Digital Markets in collaboration with the Tech Interview Handbook",
        technologies: [
            TechMap.typescript,
            TechMap.nextjs,
            TechMap.tailwind,
            TechMap.postgresql,
            TechMap.git,
        ],
    },
    {
        title: "CleanCheeks",
        description:
            "CleanCheeks is a Progressive Web App that is designed for mobile browsers to help users find clean toilets in NUS. A project of CS3216 Software Product Engineering for Digital Markets",
        technologies: [
            TechMap.typescript,
            TechMap.javascript,
            TechMap.react,
            TechMap.express,
            TechMap.nodejs,
            TechMap.postgresql,
            TechMap.git,
        ],
    },
    {
        title: "Peerprep",
        description:
            "Peerprep is a collaborative codepad that allows users to match with others and practice (Easy, Medium and Hard) LeetCode-style questions. Features a codepad and chat system that updates in real-time. Built on a Microservice architecture. A project of CS3219 Software Engineering Principles and Patterns",
        technologies: [
            TechMap.typescript,
            TechMap.javascript,
            TechMap.react,
            TechMap.express,
            TechMap.nodejs,
            TechMap.mongo,
            TechMap.postgresql,
            TechMap.firebase,
            TechMap.docker,
            TechMap.k8s,
            TechMap.git,
        ],
    },
    {
        title: "TourMate",
        description:
            "TourMate is an all-in-one collaborative trip management application that aims to make planning group trips fun and effortless. Features a shared planning system, version control, voting and comments system. A project of CS3217 Software Engineering on Modern Application Platforms",
        technologies: [TechMap.swift, TechMap.firebase, TechMap.git],
    },
    {
        title: "PIVOT",
        description:
            "PIVOT is a desktop application to assist the police investigators in keeping track of their investigations and relevant information. A project of CS2103 Software Engineering",
        technologies: [TechMap.java, TechMap.git],
    },
    {
        title: "SNUS",
        description:
            "SNUS is an all-in-one student lifestyle application designed for NUS Computing students. It features a Calendar for tracking daily schedules, Chats for social networking and Modules to check out the latest information regarding their favourite modules. A project of CP2106 Independent Software Development Project (Orbital)",
        technologies: [
            TechMap.android,
            TechMap.androidStudio,
            TechMap.kotlin,
            TechMap.firebase,
            TechMap.git,
        ],
    },
];

/*
const ARCHIVED = [
    {
        title: "Rest In Peace",
        description:
            "Rest In Peace is a top down 3rd person action game. Transported to an alternate world overrun by zombies, the protagonist has to collect energy crystals spread across the map and escape this twisted world before he is caught. A project of CS3247 Game Development",
        technologies: [TechMap.unrealEngine4, TechMap.cpp],
    },
    {
        title: "SmartBrain",
        description:
            "Smart Brain is a Web app that utilises the API from Clarifai Face Detection Models to detect faces in submitted image URLs.",
        technologies: [
            TechMap.javascript,
            TechMap.react,
            TechMap.nodejs,
            TechMap.express,
            TechMap.postgresql,
            TechMap.git,
        ],
    },
];
*/

export default ProjectDetails;
