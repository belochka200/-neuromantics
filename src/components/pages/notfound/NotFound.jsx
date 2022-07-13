import React from 'react'
import styles from './NotFound.module.css'
import { NavLink } from "react-router-dom"
import Button from "../../Button/Button"


const NotFound = () => {
    const min = 10
    const max = 20
    const style1 = { "--i": min + Math.random() * (max - min) }
    const style2 = { "--i": min + Math.random() * (max - min) }
    const style3 = { "--i": min + Math.random() * (max - min) }
    const style4 = { "--i": min + Math.random() * (max - min) }
    const style5 = { "--i": min + Math.random() * (max - min) }
    return (
        <div className={styles.pageNotFound}>
            <h1 className={styles.title}>Такой страницы нет... 404</h1>
            <NavLink to="/">
                <Button text={"Вернуться на главную"} type={"outline"}/>
            </NavLink>
            <div className={styles.sky}></div>
            <div className={styles.rain}>
                <span style={style5}/>
                <span style={style4}/>
                <span style={style3}/>
                <span style={style1}/>
                <span style={style3}/>
                <span style={style2}/>
                <span style={style1}/>
                <span style={style5}/>
                <span style={style3}/>
                <span style={style4}/>
                <span style={style5}/>
                <span style={style4}/>
                <span style={style3}/>
            </div>
        </div>
    )
}

export default NotFound