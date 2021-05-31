import { useEffect, useState } from 'react';
import '../styles/ShoppingCart.css';
import Item from './Item';

function ShoppingCart({products, setQuantity}) {
    
    return (
    <div className="shopping-cart">
        
        {products.map(product => {
            return (
                <Item product={product} setQuantity={setQuantity}/>
            );
        })}
    </div>
    );
}

export default ShoppingCart;