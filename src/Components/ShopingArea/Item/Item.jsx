import React from 'react'
import './Item.css';

const Item = (props) => {
    return (
        <div className='ItemContainer'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Item;
