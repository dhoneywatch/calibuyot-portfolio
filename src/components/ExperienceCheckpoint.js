import React from "react";

const ExperienceCheckpoint = ({ title, company, date, description }) => {
    return (
        <div className="checkpoint">
            <div>
                <h2 className="checkpoint-title mb-0">{title}</h2>
                <h3 className="checkpoint-company mb-0">{company}</h3>
                <h4 className="checkpoint-date mb-2">{date}</h4>
                <ul className="checkpoint-description mb-0">
                    {description.map((entry) => {
                        return <li>{entry}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCheckpoint;
