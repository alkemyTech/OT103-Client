import React from 'react'
import { NavLink } from 'react-router-dom'

export const AuthLogin = () => {
    return (
        <li className="nav-item mb-2 mb-lg-0 mb-lg-0">
            <NavLink className="nav-link me-3 mx-lg-5" to="/" exact >
                Login
            </NavLink>
        </li>
    )
}
