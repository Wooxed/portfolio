import React from "react";
import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/components/nav">Main</a>
            <a href="src/components/nav">Skills</a>
            <a href="src/components/nav">Projects</a>
            <a href="src/components/nav">Contact</a>
        </div>
    )
}
