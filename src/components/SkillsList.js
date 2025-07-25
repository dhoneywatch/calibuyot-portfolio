import React from "react";
import Skills from "./Skills";

const skills = [
    {
        type: "frontend",
        icon: "fa-brands fa-react",
        name: "Next.JS",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-react",
        name: "React",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-html5",
        name: "HTML",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-css3-alt",
        name: "CSS",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-js",
        name: "JavaScript",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-bootstrap",
        name: "Boostrap",
    },
    {
        type: "frontend",
        icon: "fa-brands fa-figma",
        name: "Figma",
    },
    {
        type: "backend",
        icon: "fa-brands fa-laravel",
        name: "Laravel",
    },
    {
        type: "backend",
        icon: "fa-solid fa-database",
        name: "SQL",
    },
    {
        type: "other",
        icon: "fa-brands fa-python",
        name: "Python",
    },
    {
        type: "other",
        icon: "fa-brands fa-r-project",
        name: "R",
    },
    {
        type: "current",
        icon: "fa-brands fa-node-js",
        name: "Node.js",
    },
    {
        type: "current",
        icon: "fa-brands fa-node-js",
        name: "Express.js",
    },
];

const SkillsList = () => {
    return (
        <div className="container d-flex flex-column align-items-start justify-items-center py-5 mt-5">
            <div className="pb-5 skill-wrapper">
                <h1 className="title-headings skill-section text-center">
                    Frontend Tools
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {skills
                        .filter((skill) => skill.type === "frontend")
                        .map((skill) => {
                            return (
                                <Skills icon={skill.icon} title={skill.name} />
                            );
                        })}
                </div>
            </div>
            <div className="py-5 skill-wrapper">
                <h1 className="title-headings skill-section text-center">
                    Backend Tools
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                    {skills
                        .filter((skill) => skill.type === "backend")
                        .map((skill) => {
                            return (
                                <Skills icon={skill.icon} title={skill.name} />
                            );
                        })}
                </div>
            </div>
            <div className="py-5 skill-wrapper">
                <h1 className="title-headings skill-section text-center">
                    Other Familiar Languages
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {skills
                        .filter((skill) => skill.type === "other")
                        .map((skill) => {
                            return (
                                <Skills icon={skill.icon} title={skill.name} />
                            );
                        })}
                </div>
            </div>
            {/* <div className="py-5 skill-wrapper">
                <h1 className="title-headings skill-section text-center">
                    Currently Learning
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {skills
                        .filter((skill) => skill.type === "current")
                        .map((skill) => {
                            return (
                                <Skills icon={skill.icon} title={skill.name} />
                            );
                        })}
                </div>
            </div> */}
        </div>
    );
};

export default SkillsList;
