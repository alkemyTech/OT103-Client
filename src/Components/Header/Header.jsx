import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'


const Header = () => {

    const [data, setData] = useState([
        {
        text: 'Inicio',
        link: '/',
            
        },
        {
            text: 'Nosotros',
            link: '/about',
                
        },
        {
            text: 'Contacto',
            link: '/contacto',
                
        },
        {
            text: 'Campañas',
            link: '/login-form',
                
        }
    ])

    

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Akemy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                       

                        {
                            data.map((item, index) => (
                                
                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link" to={item.link} exact>{ item.text}</NavLink>
                                </li>                                
                            ))
                        }
                        {/* <li className="nav-item">
                        <NavLink className="nav-link" to='/about' exact>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/contacto' exact>Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/login-form' exact>Campañas</NavLink>
                        </li>
                         */}
                    </ul>
                    </div>
                </div>
        </nav>


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


        
    )
}

export default Header
