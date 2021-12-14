import React from 'react';
import './slidehome.scss';

export const SlideComponent = ({ data, height }) => {
    return (
        <div style={{
            backgroundImage: `url(${data.image})`,
            height: `${height}vh`,
        }}
        className="slide__home"
        >
            <h1>{data.name}</h1>
        </div>
    );
}
