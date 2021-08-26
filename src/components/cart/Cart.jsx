import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartItem } from "./CartItem";
import { CartActions } from "./CartActions";
import { NavBar } from "../common/NavBar";
import { useCartContext } from "../context/CartContext";
import { handleResponse, setLocalCart } from "../../utils";
import { API_POST_ITEMS } from "../../constants";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setCount, setMyCart } = useCartContext();
  let history = useHistory();

  useEffect(() => {
    // Set initial State of component
    setLocalCart(setCount, setMyCart, setCartItems, setTotalPrice);
  }, [setCount]);

  // Increment Cart Quantity function
  const cartPlus = (item) => {
    let price = 0;
    let isStockAvailable = true;
    let cartList = cartItems !== null ? [...cartItems] : [];
    cartList.map((element) => {
      if (element.name === item.name) {
        if (element.quantity === element.stock) {
          toast.error("No More Stock Available");
          isStockAvailable = false;
          return;
        } else {
          if (element.stock - element.quantity === 1) {
            toast.info("No More Items In Stock");
          }
          element.quantity = element.quantity ? element.quantity + 1 : 2;
        }
      }
    });
    if (isStockAvailable) {
      cartList.forEach((element) => {
        price = price + element.price * element.quantity;
      });
      setTotalPrice(price);
      setCartItems(cartList);
      localStorage.setItem("cartItems", JSON.stringify(cartList));
    }
  };

  // Increment Cart Quantity function
  const cartMinus = (item) => {
    let price = 0;
    let cartList = cartItems !== null ? [...cartItems] : [];
    if (item.quantity > 1) {
      cartList.map((element) => {
        element.name === item.name &&
          (element["quantity"] = element["quantity"] - 1);
      });
      cartList.forEach((element) => {
        price = price + element.price * element.quantity;
      });
      setTotalPrice(price);
      setCartItems(cartList);
      localStorage.setItem("cartItems", JSON.stringify(cartList));
    } else {
      const newList = cartList.filter((element) => {
        return element.name !== item.name;
      });
      newList.forEach((element) => {
        price = price + element.price * element.quantity;
      });
      setCartItems(newList);
      setMyCart(newList);
      setCount(newList.length);
      setTotalPrice(price);
      localStorage.setItem("cartItems", JSON.stringify(newList));
    }
  };

  const handleCartSubmit = async () => {
    const initObject = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    };
    try {
      const response = await fetch(API_POST_ITEMS, initObject);
      const data = await handleResponse(response);
      data.message === "success" && history.push("/cart/success");
      clearCart();
    } catch (error) {
      toast.error(error.error);
    }
  };

  const clearCart = () => {
    cartItems.length < 1 && toast.info("Cart is Empty");
    setCartItems([]);
    setTotalPrice(0);
    setMyCart([]);
    setCount(0);
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <>
      <NavBar />
      <section id="cart">
        <div className={"container-fluid"}>
          <CartActions clearCart={clearCart} disabled={cartItems.length > 0} />
          <div className="row mt-0 mt-md-4 justify-content-center align-items-center">
            {cartItems.length > 0
              ? cartItems.map((item, index) => {
                  return (
                    <CartItem
                      item={item}
                      key={index}
                      cartPlus={cartPlus}
                      cartMinus={cartMinus}
                    />
                  );
                })
              : "No Items in Cart"}

            <div className={"col-12 price-card-wrapper"}>
              <div className={"price-card"}>
                <div className={"text-wrapper d-flex justify-content-between"}>
                  <span>Total Price:</span>
                  <span>{"$" + totalPrice.toFixed(2)}</span>
                </div>
                <div>
                  <button
                    className={"gradient-btn"}
                    onClick={() =>
                      cartItems.length > 0
                        ? handleCartSubmit()
                        : history.push("")
                    }
                  >
                    {cartItems.length > 0 ? "Order Now" : "Add More Items"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
