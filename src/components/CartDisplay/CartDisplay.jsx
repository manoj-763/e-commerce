import { useContext } from "react";
import "./CartDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import CartItem from "../CartItem/CartItem";

const CartDisplay = ({ category }) => {
  const products = useContext(StoreContext).products;

  return (
    <div className="cart-display" id="food-display">
      <h2>Top Items</h2>
      <div className="cart-display-list">
        {products.map((item, index) => {
          return (
            <CartItem
              key={index}
              product={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartDisplay;
