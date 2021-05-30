import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Homepage from './components/Homepage';
import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = el => {
    setCart([...cart, el]);
  }

  const removeFromCart = el => {
    let index = cart.indexOf(el);
    setCart(
      [...cart.slice(0, index).concat(cart.slice(index+1))]
    );
  }

  return (
    <div className="container">
      <Navbar cart={cart}/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop">
            <Shop 
              onAdd={addToCart}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
