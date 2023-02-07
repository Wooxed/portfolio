import React from "react";
import style from "./HireMe.module.css"
import styleContainer from "../../components/common/styles/Container.module.css"

export const HireMe = () => {
    return (
        <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
            <div className={style.title}>
                <h2>I Am Available For Freelancer</h2></div>
            <div><a className={style.button} href="#contact">hire me</a></div>
        </div>
    );
}