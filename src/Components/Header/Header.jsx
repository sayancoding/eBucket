import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'


const Header = (props) => {
    return (
        <div>
            <nav className="navbar">
                <div className="navWrapper">
                    <div className="imgArea">
                        <img src="" alt="LOGO"/>
                    </div>

                    <div className="option">
                        <ul className="list">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/shop"><li>Shop</li></Link>
                            <Link to="signin"><li>Sign</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;