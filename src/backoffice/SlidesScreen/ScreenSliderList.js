import React from 'react';
import { Link } from 'react-router-dom';

import { ItemList } from './ItemList';
import { mock } from './mock';

export const ScreenSliderList = () => {
    return (
        <div className="table__main">
            <div className="table__head-container">
                <h1 className="table__head-title">Listado de Slides</h1>
                <Link
                    to="/backoffice/Slides/create"
                    className="table__create-button"
                >
                    Create
                </Link>
            </div>
            <div>
                {
                    mock.map((data, i) => {
                        return (<ItemList key={i} data={data} />)
                    })
                }
            </div>
        </div>
    );
}