import React from "react";
import coloredLogo from "../assets/logo-colored.png";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img
                        src={coloredLogo}
                        alt="Dan logo"
                        className="nav-icon"
                    />
                </a>
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
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-1 gap-lg-3 text-end">
                        <li class="nav-item">
                            <a
                                class="nav-link navbar-link"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" href="#">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" href="#">
                                Skills
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" href="#">
                                Projects
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
