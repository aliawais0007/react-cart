import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export const CartActions = ({ clearCart, disabled }) => {
  return (
    <>
      <div className={"row"}>
        <div className={"col-12"}>
          <button
            className={disabled ? "clear-cart" : "disabled clear-cart"}
            onClick={() => clearCart()}
          >
            Clear Cart <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </>
  );
};
