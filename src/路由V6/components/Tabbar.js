import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Tabber.css'


export default function Tabbar() {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/film" className={({ isActive }) => isActive ? 'actived' : ''}>电影</NavLink>
                </li>
                <li>
                    <NavLink to="/cinema" className={({ isActive }) => isActive ? 'actived' : ''}>影院</NavLink>
                </li>
                <li>
                    <NavLink to="/center" className={({ isActive }) => isActive ? 'actived' : ''}>我的</NavLink>
                </li>
            </ul>
        </footer>
    )
}
