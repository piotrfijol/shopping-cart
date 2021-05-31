import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props) {

    return (
        <React.Fragment>
            <div className="navbar">
                <ul>
                    <li><Link className="navbar__link" to="/">Home</Link></li>
                    <li><Link className="navbar__link" to="/shop">Shop</Link></li>
                    <li><a className="navbar__link" href="#">About us</a></li>
                    <li><Link className="navbar__link" to="/shopping-cart"><i class="fas fa-shopping-cart"></i>
                    <div className="navbar__link__cart-items"><span>{props.cart.length}</span></div></Link></li>
                </ul>
            </div>
            <div className="mobile-navbar">
                <ul>
                    <li><a href="" className="mobile-navbar__link"><i class="fas fa-home"></i></a></li>
                    <li><a href="" className="mobile-navbar__link"><i class="fas fa-info-circle"></i></a></li>
                    <li><a href="" className="mobile-navbar__link">
                    <i class="fas fa-shopping-cart"></i>
                    <div className="mobile-navbar__link__cart-items"><span>{props.cart.length}</span></div></a>
                    </li>
                    <li>
                    <div className="mobile-navbar__link__burger">
                        <input id="burger-menu" type="checkbox"/>
                        <label htmlFor="burger-menu">
                        <div></div>
                        </label>
                    </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Navbar;