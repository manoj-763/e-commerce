// import React from 'react'
import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { carts } = useContext(StoreContext);

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <form className='place-order' onSubmit={handleSubmit}>
        <div className="place-order-left">
            <p className='tittle'>Delivery Information</p>
            <div className="multi-fields">
                <input type='text' placeholder='First name'/>
                <input type='text' placeholder='Last name'/>
            </div>
            <input type='email' placeholder='Email address'/>
            <input type='text' placeholder='Street'/>
            <div className="multi-fields">
                <input type='text' placeholder='city'/>
                <input type='text' placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type='text' placeholder='Zip-code'/>
                <input type='text' placeholder='Country'/>
            </div>
        </div>
        <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{Object.values(carts)
                  .flat()
                  .reduce((acc, cur) => acc + cur.price, 0)}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{Object.values(carts)
                  .flat()
                  .reduce((acc) => acc + 2, 0)}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{Object.values(carts)
                  .flat()
                  .reduce((acc, cur) => acc + cur.price, 0)}</p>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder