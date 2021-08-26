import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export const CartItem = ({ item, cartPlus, cartMinus }) => {
  const src = require("../../assets/images/" +
    item.name.toLowerCase() +
    ".png");
  return (
    <div className={"col-12"}>
      <div
        className={
          item.quantity === item.stock ? "cart-item max-quantity" : "cart-item"
        }
      >
        <img src={src.default} alt={item.name} />
        <div className={"d-flex flex-column align-items-center mt-2 mt-md-0"}>
          <span className={"product-name"}>{item.name}</span>
          <span className={"product-price"}>{"$" + item.price}</span>
        </div>
        <div className={"d-flex align-items-center mt-2 mt-md-0"}>
          <span className={"quantity"}>
            {item.quantity ? item.quantity : 1}
          </span>
          <FontAwesomeIcon
            icon={faPlus}
            className={"cart-action"}
            onClick={() => cartPlus(item)}
          />
          <FontAwesomeIcon
            icon={faMinus}
            className={"cart-action"}
            onClick={() => cartMinus(item)}
          />
        </div>
      </div>
    </div>
  );
};
