
import { GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import MapContainer from './MapContainer';

function Homepage() {


    return (
        <React.Fragment>
            <div className="welcome-section">
                <div className="welcome-section__frame">
                    <p>THE BEST PRICES</p>                
                </div>
                <div className="welcome-section__btn">
                <Link to="/shop"><button>Go shopping</button></Link>
                </div>
            </div>
            <div className="section about">
                <div className="section__wrapper">
                    <div>
                        <h2 className="section__wrapper__header">About us</h2>
                        <div className="section__wrapper__container">
                            <p className="section__wrapper__container__content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas faucibus ultricies tellus vitae suscipit. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et 
                            ultrices posuere cubilia curae; Ut pulvinar venenatis dictum. 
                            Aenean vitae malesuada lacus. Vivamus scelerisque bibendum 
                            ante, vitae scelerisque elit maximus ut. Nunc augue erat, 
                            blandit bibendum interdum ac, mollis sodales dui. 
                            </p>
                        </div>
                    </div>
                    <div className="section__wrapper__img">
                        <img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
                    </div>
                </div>
            </div>
            <div className="section contact">
                <div className="section__wrapper">
                        <div>
                            <h2 className="section__wrapper__header">Location <i class="fas fa-map-marker-alt"></i></h2>
                            <div className="section__wrapper__container">
                                <p className="section__wrapper__container__content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas faucibus ultricies tellus vitae suscipit. 
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="section__wrapper__map" id="map" style={{ position: 'relative', width: '100vw', height: '400px'}}>
                    <MapContainer />
                </div>
            </div>
            <footer>
                <p>Made by Piotr Fijol 2021</p>
            </footer>
        </React.Fragment>
    );
}

export default Homepage;