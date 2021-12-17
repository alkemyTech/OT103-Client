import React, { useState } from 'react';
import Menu from '../../assets/images/menu.svg'
import '../Header/Header.scss'
import { SideBar } from './SideBar';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpenNav = () => {
        if(open){
            setOpen(false);
        }else{
            setOpen(true);
        }
    }

    return (
        <>
            <div className="headerLogo">
                <button className="headerLogo__btn" onClick={handleOpenNav}>
                    <img src={Menu} alt="Menu" className="headerLogo__img" />
                </button>
            </div>
            <SideBar isOpen={open} />
        </>
    );
};
export default Header;