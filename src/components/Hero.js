import React from "react";
import imgProfile from "../assets/dan-img-2.png";
import Resume from "../assets/resume/Calibuyot_Resume.pdf";

const facebookLink = "https://www.facebook.com/dhone.m.calibuyot/";
const linkedinLink =
    "https://www.linkedin.com/in/dhone-matthews-calibuyot-1ba83b286";
const githubLink = "https://github.com/dhoneywatch/";

const Hero = () => {
    return (
        <section className="shadow-sm py-5" id="home">
            <div className="container d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-center align-items-lg-center gap-5 py-lg-5 hero-cont">
                <div className="hero-right-cont">
                    <h4 className="sub-headings text-center text-lg-start">
                        Hello there! I am...
                    </h4>
                    <h1 className="headings text-center text-lg-start hero-name">
                        Dhone <span>Matthews</span>
                    </h1>
                    <p className="normal-text text-center text-lg-start">
                    A Software Developer with one year of experience, passionate about building web 
                    applications and continuously growing in the tech industry.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-start align-items-center gap-3 gap-sm-5 mt-4 mt-sm-5">
                        <button className="button button-fill-dark">
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-download"></i>
                                <a className="button-text" href={Resume} download="Calibuyot_Dhone Matthews_Resume">Download CV</a>
                            </div>
                        </button>
                        <div className="d-flex gap-5">
                            <a
                                href={facebookLink}
                                target="_blank"
                                className="hero-icons"
                                rel="noopener noreferrer"
                            >
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a
                                href={linkedinLink}
                                target="_blank"
                                className="hero-icons"
                                rel="noopener noreferrer"
                            >
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a
                                href={githubLink}
                                target="_blank"
                                className="hero-icons"
                                rel="noopener noreferrer"
                            >
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ms-lg-5">
                    <img
                        src={imgProfile}
                        alt="Dhone Profile"
                        className="hero-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
