import React from "react";
import imgDefault from '../../images/placeholderImg.png';
import './modelCard.scss'

const CardModel = (props) => {  

    return(
            <div className="body-container">   
                {props.img 
                ? (<img src={props.img}
                    alt={props.altImg} className="imgCard"/>)
                : (<img src={imgDefault}
                    alt="imgDefault" className="imgCard"/>)
                }        
                <div className="info-container">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>                  
            </div>
    );
}
export default CardModel;