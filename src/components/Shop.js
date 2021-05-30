import ProductCard from './ProductCard';
import data from './data.json';

function Shop({onAdd}) {
    return (
        <>
        {data.map(el => {
            return <ProductCard data={el} onAdd={e => onAdd(el)}/>
        })}
        </>
    );
}

export default Shop;