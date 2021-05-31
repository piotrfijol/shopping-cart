import ProductCard from './ProductCard';

function Shop({onAdd, data}) {
    return (
        <>
        {data.map(el => {
            return <ProductCard data={el} onAdd={e => onAdd(el)}/>
        })}
        </>
    );
}

export default Shop;