import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SliderApp} from '../slideHome/SliderApp.js'

 const Home = () => {
    const [welcomeMsj, setWelcomeMsj] = useState("");

    // PETICIÓN QUE DEBE SER CAMBIADA POSTERIORMENTE CON LOS DATOS CORRECTOS
    const peticionGet = async () => {
        await axios.get(`http://ongapi.alkemy.org/api/organization`).then(response => {
            setWelcomeMsj(response.data.data.short_description);
            console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
}

useEffect(() => {
    peticionGet();
}, [])
    return(
        <>
            <div>
                <h1>Bienvenidos!</h1>
                <p>{welcomeMsj}</p>
            </div>
            <div>
                <SliderApp />
            </div>
            <div>
                <h3>Novedades...</h3>
            </div>
        </>
    );
};
export default Home;