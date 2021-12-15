import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import { LoginContext } from '../context/LoginProvider'
import './header.scss'

const Header = () => {

    const history = useHistory()

    const { login, setLogin } = useContext(LoginContext)

    const logOut = () => {
        setLogin(false)
        history.push('/')
        
    }
    // const next = () => {
    //     console.log('')
    // }
    
    const [data, setData] = useState([
        {
            text: 'Inicio',
            link: '/',
            // logOut: next
            
        },
        {
            text: 'Nosotros',
            link: '/about',
            // logOut: next
                
        },
        {
            text: 'Contacto',
            link: '/contacto',
            // logOut: next
                
        },
        {
            text: 'Campañas',
            link: '/about/members',
            // logOut: next
                
        },
        // {
        //     text: 'Cerrar sesión',
        //     link: '/login-form',
        //     logOut: logOut
                
        // }
    ])

    

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Somos Más</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            login &&  data.map((item, index) => (
                                
                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link me-3" to={item.link} exact>{ item.text}</NavLink>
                                </li>
                                
                            ))  
                        }
                        {
                            login ? (
                                <li className="nav-item" key={8}>
                                    <button className="btn btn-dark" onClick={logOut} >Cerrar sesión</button>
                                </li>
                            ) : (
                                    <>
                                    <li className="nav-item" key={1}>
                                            <NavLink className="nav-link me-3" to='/' exact>Inicio</NavLink>
                                        </li>     
                                        <li className="nav-item" key={2}>
                                            <NavLink className="nav-link me-3" to='/login-form' exact>Login</NavLink>
                                        </li> 
                                    </>
                                    
                            )
                        }
                                
                                    
                            
                        
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
