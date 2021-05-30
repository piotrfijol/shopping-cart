import React from "react";
import data from './data.json';
import '../styles/ProductCard.css';

function ProductCard({data: product, onAdd}) {


    return (
        <React.Fragment>
            <div className="product">
                <div className="product__thumbnail">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="product__description">
                    <div className="product__description__header">
                        <p className="proudct__description__header__title">{product.name}</p>
                        <p className="product__description__header__price">${product.price}</p>
                    </div>
                    <p className="product__description__content">
                        {product.description}
                    </p>
                    <div className="product__action-buttons">
                        <button onClick={onAdd} className="product__action-buttons__buy btn">Buy</button>
                        <button className="product__action-buttons__add btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductCard;