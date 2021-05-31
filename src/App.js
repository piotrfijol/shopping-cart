import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Homepage from './components/Homepage';
import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import data from './components/data.json';


function App() {

  const [cart, setCart] = useState([]);


  const setQuantity = (productId, quantityAmount) => {
    let id;
    if(cart.some(el => el.id === productId)) {
      cart.forEach((product, index) => {
        if(product.id === productId) 
          id = index;
      });
      if(quantityAmount < 0)
        removeFromCart(cart[id]);
      else
        setCart( cart => 
      [...cart.slice(0, id).concat({...cart[id], quantity: quantityAmount}, ...cart.slice(id+1))]);
    } else {
      throw new Error("Product ID not found");
    }
}

  const addToCart = el => {
    if(cart.some(product => product.id === el.id)) {
      cart.forEach( product => {
        if(product.id === el.id) {
          setQuantity(product.id, product.quantity+1);
        }
      });
    } else {
      setCart(cart => {
        return [...cart, {...el, quantity: 1}];
      });
    }
  }

  const removeFromCart = el => {
    let index = cart.indexOf(el);
    setCart(
      [...cart.slice(0, index).concat(cart.slice(index+1))]
    );
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop">
            <Shop 
              onAdd={addToCart}
              data={data}
            />
        </Route>
          <Route path="/shopping-cart">
            <ShoppingCart products={cart} setQuantity={setQuantity} onRemove={removeFromCart}/>
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
