import React from "react";
import coloredLogo from "../assets/logo-colored.png";
import HeaderLinks from "./HeaderLink";
import { Link } from "react-scroll";

const navLinks = [
    {
        title: "Home",
        link: "home"
    },
    {
        title: "About",
        link: "about"
    },
    {
        title: "Projects",
        link: "projects"
    },
    {
        title: "Contact",
        link: "contact"
    },
];

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
            <div class="container">
                <Link to="home" smooth={true} duration={100} offset={-80} class="navbar-brand">
                    <img
                        src={coloredLogo}
                        alt="Dan logo"
                        className="nav-icon"
                    />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul class="navbar-nav gap-1 gap-lg-3 align-items-center text-center mb-0">
                        {navLinks.map((nav, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <HeaderLinks title={nav.title} link={nav.link} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
