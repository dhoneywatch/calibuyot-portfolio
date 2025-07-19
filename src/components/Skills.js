import React from "react";

const Skills = ({ icon, title }) => {
    return (
        <div className="d-flex flex-column align-items-center skill-cont gap-2 p-4">
            <div className="skill-icon">
                <i class={icon}></i>
            </div>
            <h1 className="skill-headings skill-title mb-0 text-center">{title}</h1>
        </div>      
    );
};

export default Skills;