import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Korbut Sergei</h2>

                <div className={style.picsContainer}>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                </div>

                <h3 className={style.title}>©2023 All Rights Reserved</h3>
            </div>

        </div>
    )
}