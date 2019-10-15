import React from 'react'
import './Item_view.css'

const Item_view = (props) => {
    return (
        <div className='ItemView'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.cost}</p>
        </div>
    )
}

export default Item_view;