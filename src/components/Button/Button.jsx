import React from 'react'
import styles from './Button.module.css'

const Button = ({type, text}) => {
    if (type === "outline") {
        return (
            <button className={styles.btnOutline}>{text}</button>
        )
    } else {
        return (
            <button className={styles.btnDefault}>{text}</button>
        )
    }
}

export default Button;