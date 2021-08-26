import { useState, createContext, useContext } from "react";
const CartContext = createContext({
    cartCount: "0",
    myCart: [],
    setCount: (count) => { },
    setMyCart: (arr) => { }
});
CartContext.displayName = 'Cart';

const useCartContext = () => {
    return useContext(CartContext);
}

function CartProvider(props) {
    const [cartCount, setCount] = useState("0");
    const [myCart, setMyCart] = useState([]);
    return (
        <CartContext.Provider value={{ cartCount, setCount, myCart, setMyCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCartContext };
