import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Item } from "./Item";
import { NavBar } from "../common/NavBar";
import { Filters } from "./Filters";
import { useCartContext } from "../context/CartContext";
import { handleResponse, setLocalCart } from "../../utils";
import { API_GET_ITEMS } from "../../constants";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilterdItems] = useState([]);
  const [cartItems, setCartItems] = useState(null);
  const { setCount, setMyCart } = useCartContext();

  useEffect(() => {
    async function getProducts() {
      const API_KEY = API_GET_ITEMS;
      try {
        const response = await fetch(API_KEY);
        const data = await handleResponse(response);
        if (data.storage?.length > 0) {
          setProducts(data.storage);
          setFilterdItems(data.storage);
        } else {
          toast.info("No item available");
        }
      } catch (error) {
        toast.error("Error: API failed to fetch Items!");
      }

      setLocalCart(setCount, setMyCart, setCartItems);
    }
    getProducts();
  }, [setCount, setMyCart]);

  const setCart = (item) => {
    item.quantity = 1;
    let cartList = cartItems !== null ? [...cartItems] : [];
    const isExisting = cartList.some((cartItem) => {
      return item.name === cartItem.name;
    });
    if (!isExisting) {
      cartList.push(item);
      setCount(cartList.length);
      setCartItems(cartList);
      toast.success(item.name + " succesfully added to the cart!");
      localStorage.setItem("cartItems", JSON.stringify(cartList));
    } else toast.error(item.name + " already in cart!");
  };

  return (
    <>
      <NavBar />
      <section id="products">
        <div className={"container-fluid"}>
          <Filters setFilterdItems={setFilterdItems} products={products} />
          <div className="row mt-0 mt-md-4">
            {filteredItems.map((item, index) => {
              return <Item item={item} key={index} setCart={setCart} />;
            })}
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
