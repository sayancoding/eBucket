import React from 'react'

import {Link} from 'react-router-dom';

 const HomeArea = (props) => {
     console.log(props)
    return (
        <div>
            <h3>HomeSection</h3>
            <Link to='/shop' >
                <p>Shop</p>
            </Link>
        </div>
    )
}

export default HomeArea;