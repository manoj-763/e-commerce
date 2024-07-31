import { useState, useEffect } from "react";
import './SingleProduct.css'
import { useParams } from "react-router-dom";


const SingleProduct = () => {

  const {mec} = useParams()
  console.log(mec)

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${mec}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCart(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card">
        <div className="left">
          <img src={cart.image} id="imgs" alt=""/>
        </div>
        <div className="right">
            <h3>{cart.title}</h3>
            <h1>{cart.category}</h1>
            <h1>₹{cart.price}</h1>
            <h3>{cart.rating.rate}</h3>
            <h4>Available Offers</h4>
            <p>: Special PriceGet extra 11% off (price inclusive of cashback/coupon)</p>
            <p>: Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023</p>
            <p>: Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*</p>
            <p>: Bank Offer5% Cashback on Flipkart Axis Bank</p>
           
        </div>
</div>
  );
};

export default SingleProduct;
