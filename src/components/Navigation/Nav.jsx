import React, { useContext }    from "react";
import { ThemeContext }         from '../ThemeContext';
import nav                      from "./nav.scss";

export default function Nav() {

    const { theme, toggleTheme } = useContext(ThemeContext);
 
    return(
        <nav>
            <ul
                className="nav nav-tabs"
                id="myTab"
                role="tablist"   
            >
                <li
                    className="nav-item"
                    role="presentation"
                >
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                        style={{
                                background: theme === "light" ? "white" : "#212529",
                                color: theme === "light" ? "blue" : "white"
                        }}
                        >
                            Home
                    </button>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                >
                    <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                        style={{
                            background: theme === "light" ? "white" : "#212529",
                            color: theme === "light" ? "blue" : "white"
                        }}
                    >
                        Profile
                    </button>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                >
                    <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                        style={{
                            background: theme === "light" ? "white" : "#212529",
                            color: theme === "light" ? "blue" : "white",
                        }}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}