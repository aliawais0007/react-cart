import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "./components/products/Products";
import { Cart } from "./components/cart/Cart";
import { Success } from "./components/cart/Sucess";
import { CartProvider } from "./components/context/CartContext";
import "./custom.css";

function App() {
  useEffect(() => {
    function adjustFontSize() {
      if (window.innerWidth > 1440) {
        document.documentElement.style.fontSize = (window.innerWidth / 1920) * 16 + "px";
      }
      else { document.documentElement.style.fontSize = "16px"; }
    }
    window.addEventListener("resize", function () { adjustFontSize(); }, false);
    return window.removeEventListener('resize', adjustFontSize());
  }, []);

  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route> 
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/cart/success" exact>
            <Success />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;