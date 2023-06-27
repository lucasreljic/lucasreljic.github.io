import React from "react";
import styles from './Backdrop.module.css'
const Backdrop = (props) => {
    return (
        <div className={styles.body}>
            <div className={styles.border}>
            <div className={styles.button} to={props.link}>{props.children}</div>
            </div>
        </div>
    )
    ;
}

export default Backdrop;