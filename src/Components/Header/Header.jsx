import React, { useState } from 'react';
import Menu from '../../assets/images/menu.svg'
import '../Header/Header.scss'
import { SideBar } from './SideBar';

const Header = () => {
    const [open, setOpen] = useState(-100);

    const handleOpenNav = () => {
        if(open === 0){
            setOpen(-100);
        }else{
            setOpen(0)
        }
    }

    return (
        <>
            <div className="headerLogo">
                <button className="headerLogo__btn" onClick={handleOpenNav}>
                    <img src={Menu} alt="Menu" className="headerLogo__img" />
                </button>
            </div>
            <SideBar left={open} />
        </>
    );
};
export default Header;