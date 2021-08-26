export const Item = ({ item, setCart }) => {
  const src = require("../../assets/images/" +
    item.name.toLowerCase() +
    ".png");
  return (
    <div className={"col-12"}>
      <div className={"cart-item"}>
        <img src={src.default} alt={item.name} />
        <div className={"d-flex flex-column align-items-center"}>
          <span className={"product-name"}>{item.name}</span>
          <span className={"product-price"}>{"$" + item.price}</span>
        </div>
        <button onClick={() => setCart(item)}>Add to Cart</button>
      </div>
      
    </div>
  );
};
