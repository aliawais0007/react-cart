/* API Response Handler Function */
export const handleResponse = async (response) => {
    if (response.status === 200) {
        return await response.json();
    }
    else throw await response.json();
}

/* Set Local Cart Function */
export const setLocalCart = (setCount, setMyCart, setCartItems, setTotalPrice) => {
    const localCart = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    let price = 0;
    localCart.forEach(item => {
        price = price + item.price * item.quantity;
    })
    setCount(localCart.length);
    setMyCart(localCart);
    setCartItems(localCart);
    setTotalPrice && setTotalPrice(price);
}

/* Products Filteration Function */
export const filterItems = (array, searchText) => {
    return array.filter(element => element.name.toLowerCase().includes(searchText));
}