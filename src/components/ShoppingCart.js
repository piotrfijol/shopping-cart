import { useEffect, useState } from 'react';
import '../styles/ShoppingCart.css';
import Item from './Item';

function ShoppingCart({products, setQuantity, onRemove}) {
    
    return (
    <div className="shopping-cart">
        
        {products.map(product => {
            return (
                <Item product={product} setQuantity={setQuantity} onRemove={onRemove}/>
            );
        })}
    </div>
    );
}

export default ShoppingCart;