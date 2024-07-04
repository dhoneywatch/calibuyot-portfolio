import React from "react";

const HeaderLinks = ({ navLink, title }) => {
    return (
        <a>
            <a
                className="nav-link navbar-link"
                aria-current="page"
                href={navLink}
            >
                {title}
            </a>
        </a>
    );
};

export default HeaderLinks;
