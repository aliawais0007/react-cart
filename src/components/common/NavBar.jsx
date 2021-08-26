import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [count, setNavCount] = useState("0");
  let { cartCount } = useCartContext();
  let history = useHistory();
  useEffect(() => {
    setNavCount(cartCount.toString());
  }, [cartCount]);
  return (
    <section id="navbar" className={"sticky-top"}>
      <div className={"container-fluid"}>
        <div className={"row justify-content-between"}>
          <div className="col-5">
            <a onClick={() => history.push("")}>Bakery</a>
          </div>
          <div className="col-5">
            <div className={"logo-section"}>
              <FontAwesomeIcon
                icon={faCartPlus}
                onClick={() => history.push("/cart")}
              />
              <span className={"cart-count"}>{count}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
