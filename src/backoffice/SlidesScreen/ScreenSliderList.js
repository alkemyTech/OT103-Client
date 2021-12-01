import React from 'react';
import { Link } from 'react-router-dom';

import { mock } from './mock';
import { ItemList } from './ItemList';
import './screenslide.scss';

export const ScreenSliderList = () => {
    return (
        <div className="screen__main">
            <div className="screen__head-container">
                <h1 className="screen__head-title">Listado de Slides</h1>
                <Link
                    to="/backoffice/Slides/create"
                    className="screen__create-button"
                >
                    Create
                </Link>
            </div>
            {
                mock.map((data, i) => {
                    return (<ItemList key={i} data={data} />)
                })
            }
        </div>
    );
}
