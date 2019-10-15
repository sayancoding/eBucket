import React from 'react'
import {Link, withRouter} from 'react-router-dom';

import './Item.css';

const Item = (props) => {
    // console.log(props);
    return (
        <Link to={`${props.match.url}/${props.urlName}`}>
        <div className='ItemContainer'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
        </Link>
    )
}

export default withRouter(Item);
