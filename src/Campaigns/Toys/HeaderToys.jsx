import React from 'react';
import logo from '../../assets/images/logo.png'
import './headerToys.scss'

const HeaderToys = () => {
  return (
    <header className='header__toys'>
      <div className="header__toys-content">
        <img src={logo} alt="logo" className='header__toys-logo' />
      </div>
      <div className="header__toys-ong">
        <img src={ logo } alt="logo ONG"  className='header__toys-logo-ong'/>
      </div>
      <div className="header__toys-slogan">
        <h5 className="slogan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus cupiditate vel maiores accusantium autem expedita, saepe alias molestias in sit provident.</h5>
      </div>

    </header>
  );
}
 
export default HeaderToys;