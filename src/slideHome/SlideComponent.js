import React from 'react';

export const SlideComponent = ({ data }) => {
    return (
        <div style={{
            backgroundImage: `url(${data.image})`,
            backgroundPosition: 'center',
            backgroundSize: '100vw',
            height: '30vh',
            maxHeight: `250px`,
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center'
        }}>
            <h1>{data.name}</h1>
        </div>
    );
}
