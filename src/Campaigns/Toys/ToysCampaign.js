import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.scss"

const ToysCampaign = () => {
    return (
        <>
            <Header/>
            <div className="body">
                <Slider/>
                <Content/>
            </div>
            <Footer/>
        </>
    );
}

export default ToysCampaign;
