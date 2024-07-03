import React from "react";
import imgProfile from "../assets/dan-img-2.png";

const facebookLink = "https://www.facebook.com/dhone.m.calibuyot/";
const linkedinLink = "https://www.linkedin.com/in/dhone-matthews-calibuyot-1ba83b286";

const Hero = () => {
    return (
        <div className="container d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-center align-items-lg-center gap-5 my-5 hero-cont">
            <div className="hero-right-cont">
                <h4 className="sub-headings text-center text-lg-start">
                    Hello there! I am...
                </h4>
                <h1 className="headings text-center text-lg-start hero-name">
                    Dhone Matthews
                </h1>
                <p className="normal-text text-center text-lg-start">
                    I am a graduating BS Computer Science student from the
                    University of the Philippines Manila. My aspirations include
                    gaining experiences and skills to expand my knowledge about
                    the ever-improving technology, particularly in but not
                    limited to Software Development.
                </p>
                <div className="hero-icons d-flex justify-content-start align-items-center gap-5 mt-5">
                    <button className="button-fill-dark">DOWNLOAD CV</button>
                    <a href={facebookLink} target="_blank">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href={linkedinLink} target="_blank">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-github"></i>
                    </a>
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
    );
};

export default Hero;
