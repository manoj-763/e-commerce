import { useContext } from "react";
import "./CartItem.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


// eslint-disable-next-line react/prop-types
const CartItem = ({product}) => {
  const { id, name, price, description, image } = product;


  const store = useContext(StoreContext);

  const singlePageProduct = useNavigate();

  return (
    <div className="cart-item">
      <div className="cart-item-img-container">
        <Link to={`/singlepage/${id}`}> <img
          // onClick={() => singlePageProduct("/singlepage/")}
          className="cart-item-image"
          src={image}
          alt=""
        /></Link>
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name-rating">
          <p onClick={() => singlePageProduct("/singlepage")}>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        {/* <p className="cart-item-desc">{description}</p> */}
        <div className="cart-item-para-container">
          <p className="cart-item-price">{price}</p>
          {
            <div className="cart-item-counter">
              <img
                onClick={() => store.onAddCarts(product, false)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{store.carts[id] ? store.carts[id].length : 0}</p>
              <img
                onClick={() => store.onAddCarts(product, true)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CartItem;
