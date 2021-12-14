import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'


const Header = () => {
    // const [showLogo, setShowLogo] = useState(false)

    // window.addEventListener('DOMContentLoaded', () => {
        
    // })

    // const show = () => {
    //     setShowLogo(!showLogo)
    // }

    return (


        // <nav className='menu'>
        //         <Link to='/' className='logo'>Alkemy</Link>
        //     <ul className={
        //         showLogo ? "menu__items show" : "menu__items"
        //         }>
        //             <li>
        //             <NavLink
        //                 to='/'
        //                 exact
        //                 className='btn btn-dark decoration'
        //             >
        //                 Inicio
        //             </NavLink>
        //             </li>
        //             <li>
        //             <NavLink
        //                 to='/about'
        //                 exact
        //                 className='btn btn-dark decoration'
        //             >
        //                 Nosotros
        //             </NavLink>
        //             </li>
        //             <li>
        //             <NavLink
        //                 to='/contacto'
        //                 exact
        //                 className='btn btn-dark decoration'
        //             >
        //                 Contacto
        //             </NavLink>
        //             </li>
                    
        //             <li>
        //             <NavLink
        //                 to='/backoffice/organization'
        //                 exact
        //                 className='btn btn-dark decoration'
        //             >
        //                 Campañas
        //             </NavLink>
        //         </li>                 
                    
        //         </ul>
        //     <i
        //         className="bi bi-list loguito"
        //         onClick={()=>show()}
        //     ></i>
        //     </nav>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Akemy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to='/' exact>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/about' exact>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/contacto' exact>Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/contacto' exact>Campañas</NavLink>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>

        
    )
}

export default Header
