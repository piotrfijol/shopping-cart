import '../styles/Navbar.css';

function Navbar() {

    return (
        <div className="navbar">
            <ul>
                <li><a href="" className="navbar__link"><i class="fas fa-home"></i></a></li>
                <li><a href="" className="navbar__link"><i class="fas fa-info-circle"></i></a></li>
                <li><a href="" className="navbar__link">
                <i class="fas fa-shopping-cart"></i>
                <div className="navbar__link__cart-items"><span>50</span></div></a>
                </li>
                <li>
                <div className="navbar__link__burger">
                    <input id="burger-menu" type="checkbox"/>
                    <label htmlFor="burger-menu">
                    <div></div>
                    </label>
                </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;