import React from "react";

const CardModel = (props) => {
    let errorflag=true;
    return(
        <div className="images-container">
            <div>
                <img src={props.img} alt={props.imgAlt} onError={(e)=>{ if (errorflag){ errorflag=false; e.target.src= "https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png"; } }}
                />
                <div className="container">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
             </div>      
        </div>
            
    );
}
export default CardModel;