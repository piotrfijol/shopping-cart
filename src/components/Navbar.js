import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {

    return (
        <React.Fragment>
            <div className="navbar">
                <ul>
                    <li><a className="navbar__link" href="/">Home</a></li>
                    <li><a className="navbar__link" href="/shop">Shop</a></li>
                    <li><a className="navbar__link" href="#">About us</a></li>
                    <li><a className="navbar__link" href="#"><i class="fas fa-shopping-cart"></i>
                    <div className="navbar__link__cart-items"><span>{props.cart.length}</span></div></a></li>
                </ul>
            </div>
            <div className="mobile-navbar">
                <ul>
                    <li><a href="" className="mobile-navbar__link"><i class="fas fa-home"></i></a></li>
                    <li><a href="" className="mobile-navbar__link"><i class="fas fa-info-circle"></i></a></li>
                    <li><a href="" className="mobile-navbar__link">
                    <i class="fas fa-shopping-cart"></i>
                    <div className="mobile-navbar__link__cart-items"><span>50</span></div></a>
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