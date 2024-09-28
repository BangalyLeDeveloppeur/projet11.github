import React from 'react';


const Feature = ({title,content,image}) => {
    return (
        <div className='feature-item '>
            <img src={image} alt='fectaure'/>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Feature;