import { filterItems } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Filters = ({ setFilterdItems, products }) => {
  return (
    <div className={"row"}>
      <div className={"col-12 position-relative"}>
        <input
          placeholder={"Enter Text to Search"}
          onChange={(e) =>
            setFilterdItems(filterItems(products, e.target.value))
          }
          className={"search"}
        />
        <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
      </div>
    </div>
  );
};
