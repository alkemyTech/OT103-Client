import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./styles/members.scss";

const Members = () => {
    
    const [list, setList] = useState([])

    const getList = async () => {
        
        const url = 'http://ongapi.alkemy.org/api/members'
        const data = await fetch(url)
        const res = await data.json()
        setList(res.data)
    }
    
    useEffect(() => {
        getList()
    }, [])




    return (
        <div className="container">
            {
                list.map(item => (
                    <div className="card" key={ item.id}>
                        <figure>
                            <img src={item.image} alt="imagen" />
                        </figure>
                            <div className="content">
                                <h2 className="content-title">{item.name}</h2>
                            <h3 className="content-description">{item.description}</h3>
                            <div className='links'>

                                <Link className="content-description link" to={`/${item.facebookUrl }`} >Facebook</Link>
                            
                                <Link className="content-description link" to={`/${item.linkedinUrl }`}>Linkedin</Link>
                            </div>
                                
                            </div>
                    </div>
                ))
            }
            
            
        </div>
    )
}

export default Members
