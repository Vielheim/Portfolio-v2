import TechMap from "./TechMap";

const ProjectDetails = [
    {
        title: "TourMate",
        description:
            "TourMate is an all-in-one collaborative trip management application that aims to make planning group trips fun and effortless. Features a shared planning system, version control, voting and comments system.",
        technologies: [TechMap.swift, TechMap.firebase, TechMap.git],
    },
    {
        title: "SmartBrain",
        description:
            "Smart Brain is a Web app that utilises the API from Clarifai Face Detection Models to detect faces in submitted image URLs.",
        technologies: [
            TechMap.react,
            TechMap.nodejs,
            TechMap.express,
            TechMap.postgresql,
            TechMap.git,
        ],
    },
    {
        title: "SNUS",
        description:
            "SNUS is an all-in-one student lifestyle application designed for NUS Computing students. It features a Calendar for tracking daily schedules, Chats for social networking and Modules to check out the latest information regarding their favourite modules.",
        technologies: [
            TechMap.android,
            TechMap.androidStudio,
            TechMap.kotlin,
            TechMap.firebase,
            TechMap.git,
        ],
    },
    {
        title: "PIVOT",
        description:
            "PIVOT is a desktop application to assist the police investigators in keeping track of their investigations and relevant information.",
        technologies: [TechMap.java, TechMap.git],
    },
    {
        title: "Rest In Peace",
        description:
            "Rest In Peace is a top down 3rd person action game. Transported to an alternate world overrun by zombies, the protagonist has to collect energy crystals spread across the map and escape this twisted world before he is caught.",
        technologies: [TechMap.unrealEngine4, TechMap.cpp],
    },
];

export default ProjectDetails;
