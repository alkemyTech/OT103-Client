import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router';
import "./organizationData.scss";

const OrganizationData = (props) => {

    const [data, setData] = useState({})

    const url = 'http://ongapi.alkemy.org/api/organization'

    const getData = async () => {

        try {
            const data = await fetch(url)
            const res = await data.json()
            setData(res.data)
            
        } catch (error) {
            console.log(error)
        }        
    }

    useEffect(() => {
        
        getData()
        
        
    }, [])
    
    const redirection = () => {
        props.history.push('/backoffice/organization/edit')
    }





    return (
        <div className="container">
            <div className="card">
                <figure>
                    <img src={data.logo} alt="logo" />
                </figure>
                <div className="content">
                    <h1 className="content-title">{data.name}</h1>
                    <p className="content-description">{data.short_description}</p>
                    <button
                        className='content-button'
                        onClick={redirection}
                    >
                        Formulario de edición
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(OrganizationData)
