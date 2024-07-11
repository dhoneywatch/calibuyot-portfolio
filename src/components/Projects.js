import React from "react";
import Tags from "./Tags";

const Projects = ({ title, text, tags, img, getData }) => {
    const tagList = [];
    for (let tag in tags) {
        tagList.push(tag);
    }
    
    return (
        <div className="project-container d-flex flex-column px-3 py-4">
            <img src={img} alt="..." className="card-img-top"/>
            <h1 className="project-title pt-3">{title}</h1>
            <p className="project-text">
                {text}
            </p>
            <p className="read-more" onClick={getData}>
                Read more <i class="bi bi-arrow-right"></i>
            </p>
            <div className="tags-wrapper d-flex flex-wrap gap-1">
                {tagList.map((tag) => {
                    return <Tags tag={tags[tag]} />
                })}
            </div>
        </div>
    );
};

export default Projects;
