import React from "react";
import { Link, animateScroll } from "react-scroll";

const HeaderLinks = ({ title, link }) => {
    return (
        <Link to={link} activeClass="active" spy={true} smooth={true} duration={100} offset={-80} className="nav-link py-1">
            {title}
        </Link>
    );
};

export default HeaderLinks;
