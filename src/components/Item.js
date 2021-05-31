import { useState } from "react";

function Item({product, setQuantity}) {

    const handleOnChange = e => {
        setQuantity(product.id, e.target);
    }

    const handleIncrease = e => {
        setQuantity(product.id, product.quantity+1);
    }

    const handleDecrease = e => {
        setQuantity(product.id, product.quantity-1);
    }

    return (
        <div className="shopping-cart__product">
            <div className="shopping-cart__product__thumbnail">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="shopping-cart__product__description">
                <div className="shopping-cart__product__description__header">
                    <p className="shopping-cart__product__description__header__title">{product.name}</p>
                    <p className="shopping-cart__product__description__header__price">${product.price}</p>
                </div>
            </div>
            <div className="shopping-cart__product__quantity">
                <button className="decrease" onClick={handleDecrease}>-</button>
                <input type="number" value={product.quantity} onChange={handleOnChange}/>
                <button className="increase" onClick={handleIncrease}>+</button>
            </div>
            <div className="shopping-cart__product__remove">
                <button>Remove</button>
            </div>
        </div>
    );
}

export default Item;