import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { LoginContext } from '../context/LoginProvider'
import './headerWeb.scss'
import logo from '../../assets/images/logo.png'

const HeaderWeb = (props) => {

    
 

    // const { login, setLogin } = useContext(LoginContext)

    // const logOut = () => {
    //     setLogin(false)
    //     props.history.push('/login-form')
        
    // }
    // const next = () => {
    //     console.log('')
    // }
    
    const [data, setData] = useState([
        {
            text: 'Inicio',
            link: '/',
            className: false
            
        },
        {
            text: 'Nosotros',
            link: '/about',
            className: false
                
        },
        {
            text: 'Contacto',
            link: '/contacto',
            className: false
                
        },
        {
            text: 'Juguetes',
            link: '/toys-campaign',
            className: false
                
        },
        {
            text: 'Escuela',
            link: '/school-campaign',
            className: false
                
        },
        {
            text: 'Login',
            link: '/login-form',
            className: true
                
        },
        {
            text: 'Registrarse',
            link: '/register-form',
            className: true
                
        }
    ])

    

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="logo" width={ 100}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                           data.map((item, index) => (
                                
                                <li className="nav-item" key={index}>
                                   <NavLink className="nav-link me-3" to={item.link} exact>{  item.text }</NavLink>
                                </li>
                                
                           )) 
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

export default withRouter(HeaderWeb)