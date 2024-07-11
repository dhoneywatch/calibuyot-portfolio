import React, { useState } from "react";
import Tab from "./Tab";
import Education from "./Education";
import SkillsList from "./SkillsList";
import ExperienceTimeline from "./ExperienceTimeline";

const About = () => {
    const tabs = ["Education", "Skills", "Experience"];
    const [tabActive, setTabActive] = useState("Education");

    const handleTabClick = (key) => {
        setTabActive(key);
    };

    const toggleTabClass = (key) => {
        return key === tabActive
            ? "tab-button tab-button-active"
            : "tab-button";
    };

    const displayAboutContent = (activeTab) => {
        switch (activeTab) {
            case "Education":
                return <Education />;
            case "Skills":
                return <SkillsList />;
            case "Experience":
                return <ExperienceTimeline />;
            default:
                return <div>Education Tab</div>;
        }
    };

    return (
        <section className="about-wrapper py-5" id="about">
            <div className="container py-5">
                <div className="d-flex justify-content-center">
                    <div className="about-hr mb-4"></div>
                </div>
                <h1 className="headings text-center about-headings">
                    About <span>me</span>
                </h1>
                <p className="normal-text text-center about-desc">
                    Discover my <span>educational background</span>, the{" "}
                    <span>skills</span> I have honed, and the{" "}
                    <span>experiences</span> that have shaped my journey.
                </p>
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center pt-4 px-3 gap-1 gap-md-5 tab-cont">
                        {tabs.map((tab) => {
                            return (
                                <Tab
                                    toggleClass={toggleTabClass(tab)}
                                    clickEvent={(e) => {
                                        e.preventDefault();
                                        handleTabClick(tab);
                                    }}
                                    nameTab={tab}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        {displayAboutContent(tabActive)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
