import React from "react";


const Education = () => {
    return (
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center educ-cont">
            <div className="educ-title-cont py-2 px-2 ps-lg-3 pe-lg-5">
                <h1 className="educ-title text-center text-lg-start">Bachelor's Degree</h1>
            </div>
            <div className="educ-details">
                <h1 className="title-headings about-title text-center">
                    University of the Philippines Manila
                </h1>
                <h3 className="sub-headings about-subheadings text-center">
                    BS Computer Science - Major in Health Informatics
                </h3>
                <h6 className="sub-sub-headings about-subsubheadings text-center">
                    (September 2020 - July 2024)
                </h6>
                <p className="normal-text about-text pt-3 text-center mb-0">
                    During my stay at UP Manila, I developed a growing interest
                    in software development, especially in frontend development,
                    and machine learning.
                </p>
            </div>
        </div>
    );
};

export default Education;
