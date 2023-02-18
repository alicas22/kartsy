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
import Footer from './components/Footer'
import MyProducts from "./components/MyProducts";
import MyReviews from "./components/MyReviews";
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
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/cart/purchasecomplete'>
            <PurchaseSplash />
          </Route>
          <Route path='/myproducts'>
            <MyProducts />
          </Route>
          <Route path='/myreviews'>
            <MyReviews />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>

        </Switch>
      )}
     <Footer />
    </>
  );
}

export default App;
