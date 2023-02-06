import React, { useContext }    from "react";
import { ThemeContext }         from '../ThemeContext';
import logo                     from "../../assets/img/logo.jpeg";
import header                   from "./header.scss";
import Nav                      from "../Navigation/Nav";
import { hover }                from "@testing-library/user-event/dist/hover";

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <header
            style={{
                background: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white"
            }} 
        >
            <figure>
                <img src={logo} alt="" />
            </figure>
            <Nav />
            <button
                onClick={toggleTheme}
                className="btn btn-outline"
                style={{
                    borderColor: theme === "light" ? "black" : "white",
                    color: theme === "light" ? "black" : "white",
                    background: "tranparent"
                }}
            >
                {(theme).toUpperCase()}
            </button>
        </header>
    );
}