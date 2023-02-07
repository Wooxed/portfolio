import React from "react";
import style from "./Project.module.css"

export const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.projectImgContainer}>
                <button className={style.button}>See More</button>
            </div>
            <div className={style.projectInfo}>
                <span className={style.title}>Name project</span>
                <p className={style.description}>Description</p>
            </div>
        </div>
    )
}
