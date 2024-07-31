// import React from 'react'
import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { carts, onAddCarts } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.keys(carts).map((itemId) => {
          if (carts[itemId].length > 0) {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className="cart-items-tittle cart-items-item">
                  <img src={carts[itemId][0].image} alt="" />
                  <p>{carts[itemId][0].name}</p>
                  <p>{carts[itemId][0].price}</p>
                  <p>{carts[itemId].length}</p>
                  <p>{carts[itemId][0].price * carts[itemId].length}</p>
                  <p
                    className="cross"
                    onClick={() => onAddCarts(carts[itemId][0], false,true)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{Object.values(carts)
                  .flat()
                  .reduce((acc, cur) => acc + cur.price, 0)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                {Object.values(carts)
                  .flat()
                  .reduce((acc) => acc + 2, 0)}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                {Object.values(carts)
                  .flat()
                  .reduce((acc, cur) => acc + cur.price, 0)}
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
