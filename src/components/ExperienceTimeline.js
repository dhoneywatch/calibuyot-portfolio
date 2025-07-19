import React from "react";
import ExperienceCheckpoint from "./ExperienceCheckpoint";

const experiences = [
    {
        title: "Jr. Software Developer",
        company: "PwC Philippines",
        date: "(September 2024 - Present)",
        description: [
            "Implements user interfaces based on specifications provided by the Design Analyst.",
            "Develops and maintains APIs to support frontend functionality and data integration.",
            "Integrates frontend components with backend services for seamless application performance.",
            "Troubleshoots and resolves frontend issues to enhance performance and user experience."
        ],
    },
    {
        title: "Web Designer Intern",
        company: "Technomancer Inc.",
        date: "(June 2023 - August 2023)",
        description: [
            "Responsible for designing and creating the layout of a website.",
            "This includes creating wireframes and translating them into code.",
            "Resolves frontend issues of an existing website.",
        ],
    },
    {
        title: "Technical Committee Member",
        company: "UP Manila - USC Elections",
        date: "(July 2022 - August 2022)",
        description: [
            "Operated Qualtrics for sending out election invitations, executing the actual elections, and monitoring votes.",
        ],
    },
    {
        title: "IT/Tech Staff",
        company: "2020/2021 Bar Examinations",
        date: "(February 2022)",
        description: [
            "Rendered assistance in operating Examplify, the software used in taking the examinations.",           
            "Performed basic troubleshooting in case of technical problems."
        ],
    },
    {
        title: "Management Information System Staff",
        company: "Jesus Is Lord Church Kaunlaran",
        date: "2017-2020",
        description: [
            "Handled the demographic data of the local church members.",
            "Utilized an Information System to store the basic information of the local church members.",
            "Created annual and quarterly reports using the Key Performance Indicator (KPI)."
        ],
    },
    {
        title: "Multimedia Arts Network Staff",
        company: "Jesus Is Lord Church Kaunlaran",
        date: "2017-2020",
        description: [
            "Responsible for creating creative-related deliverables such as posters, video presentations, slides, etc.",
        ],
    },
];

const ExperienceTimeline = () => {
    return (
        <div className="timeline py-5 mt-5">
            {experiences.map((experience) => {
                return <ExperienceCheckpoint title={experience.title} company={experience.company} date={experience.date} description={experience.description}/> 
            })}
        </div>
    );
};

export default ExperienceTimeline;
