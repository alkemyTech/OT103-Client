import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://ongapi.alkemy.org/api/slides';

export const ItemList = ({ data }) => {

    const handleDelete = () => {
        // try {
        //     const deleteData = axios.delete(`${URL}/${data.id}`);
        //     return deleteData.data;
        // } catch (error) {
        //     console.log(error)
        // }
        console.log(data.id);
    };

    return (
        <div className="screen__items">
            <div className="screen__text">
                <h3 className="screen__title">Title: {data.name}</h3>
                <div className="screen__div-button">
                    {
                     data.order ?
                         (<h5>Order: {data.order}</h5>)
                         : (<h5>No order</h5>)
                    }
                    <div>
                        <Link to={`/backoffice/Slides/create/${data.id}`}>
                            <i className="fas fa-edit"></i>
                        </Link>
                        <button onClick={handleDelete}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
            <img
                className="screen__image"
                src={data.image}
                alt={data.image}
            />
        </div>
    );
};
