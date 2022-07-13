import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import '../../assets/grid.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={"container"}>
                <NavLink to={"/"}>
                    <li>Главная</li>
                </NavLink>
                <NavLink to={"our-wins"}>
                    <li>Достижения</li>
                </NavLink>
                <NavLink to={"about"}>
                    <li>О нас</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;