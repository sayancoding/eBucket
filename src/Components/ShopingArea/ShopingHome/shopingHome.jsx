import React from 'react'
import ItemDirectory from '../../../Containers/ItemDirectory/ItemDirectory'
import { Link } from 'react-router-dom';

const shopingHome = (props) => {
    console.log(props);
    return (
        <div>
            <Link to='/' >
                <p>Back to Home</p>
            </Link>
            <h3>shopingSection</h3>
            <ItemDirectory/>
        </div>
    )
}

export default shopingHome;