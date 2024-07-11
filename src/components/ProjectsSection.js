import React, { useState } from "react";
import Projects from "./Projects";
import ProjectModal from "./ProjectModal";
import projects from "./ProjectData";

const ProjectsSection = () => {
    const [modal, setModal] = useState(false);
    const [tempData, setTempData] = useState([]);

    const getData = (title, desc, tags, imgs) => {
        let temp = [title, desc, tags, imgs];
        setTempData(temp);

        setModal(true);
    };

    const toggleModal = () => {
        return modal === true ? "modal modal-active" : "modal";
    };

    return (
        <section className="py-5" id="projects">
            <div className="container py-5">
                <div className="d-flex justify-content-center">
                    <div className="projects-hr mb-4"></div>
                </div>
                <h1 className="headings text-center projects-headings">
                    Recent <span>Projects</span>
                </h1>
                <p className="normal-text text-center projects-subtitle">
                    Explore a curated selection of my{" "}
                    <span>recent projects</span>, showcasing my{" "}
                    <span>capabilities</span> and the <span>range</span> of work
                    I've completed.
                </p>
                <div className="py-5 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                    {projects.map((project) => {
                        return (
                            <Projects
                                title={project.title}
                                text={project.text}
                                tags={project.tags}
                                img={project.img[0].src}
                                getData={() =>
                                    getData(
                                        project.title,
                                        project.text,
                                        project.tags,
                                        project.img
                                    )
                                }
                            />
                        );
                    })}
                </div>
            </div>
            <ProjectModal
                toggleModal={toggleModal()}
                title={tempData[0]}
                desc={tempData[1]}
                tags={tempData[2]}
                images={tempData[3]}
                hideModal={() => {
                    setModal(false);
                }}
            />
        </section>
    );
};

export default ProjectsSection;
