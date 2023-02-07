import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <div className={style.title}>
                    <h2>Contact</h2>
                </div>
                <form action="#" className={style.formContainer}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <textarea rows={7} placeholder="Your message"></textarea>
                    <button type="submit" className={style.button}>send message</button>
                </form>
            </div>
        </div>
    )
}