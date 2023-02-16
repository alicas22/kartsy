import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import PurchaseSplash from "./components/PurchaseSplash";
import Cart from "./components/Cart"
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <AllProducts />
          </Route>
          <Route path='/products/:productId'>
            <SingleProduct />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/cart/purchasecomplete'>
            <PurchaseSplash />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>

        </Switch>
      )}
      <div className='cart-footer'>
        <div className="footer-top">
          <p><i class="fa-regular fa-copyright"></i> 2023 Kartsy, Inc. </p>
          <p className='footer-tech'>
            <p>Javascript</p>
            <p>Python</p>
            <p>Flask</p>
          </p>
        </div>
        <p>Merchant is Kartsy, Inc. (USA), and the currency in which the seller transacts is fake.</p>
        <p>Kartsy, Inc., USA 117 Fake Street Brooklyn, NY 11201</p>
      </div>
    </>
  );
}

export default App;
