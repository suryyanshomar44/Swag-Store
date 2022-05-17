import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/cartHelper';
import StripeCheckoutButton from 'react-stripe-checkout';
import { API } from '../backend';
import { createOrder } from './helper/orderHelper';



const StripeCheckout = ({products, setReload = f => f, reload = undefined}) => {


   const [data, setData] = useState({
       loading: false,
       success: false,
       error: "",
       address: ""
   });
   const token = isAuthenticated() && isAuthenticated().token
   const userId = isAuthenticated() && isAuthenticated().user._id

   const getFinalPrice = () => {

       let amount = 0;
       products.map(p => {
           amount = amount + p.price
       })
       return amount;
   };
   
   const makePayment = (token) => {
    const body = {
        token,
        products
    }
    const headers = {
        "Content-Type": "application/json"
    }
    return fetch(`${API}/stripepayment`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    }).then(Response => {
        console.log(Response)
        //
        const {status} = Response;
        cartEmpty();
    }).catch(err => console.log(err))
   };

   const showStripeButton = () => {
       return isAuthenticated() ? (
           <StripeCheckoutButton
             stripeKey="pk_test_51Jaz3ASH6mXYzGI82WFFPcxjR0is3ZNGlWYA03C2IWvwfqJARr7jclOI4PhQn9myY3fbVsb57QgqAT7aXqkwsl8r00dIQkei9I"
             token={makePayment}
             amount={getFinalPrice() * 100}
             name = "Buy Tshirts"
             shippingAddress
             billingAddress
           >
           <button className="btn btn-success">Pay with Stripe</button>
           </StripeCheckoutButton>
       ) : (
           <Link to="/signin">
               <button className="btn btn-warning">Signin</button>
           </Link>
       )
   }


    return (
        <div>
            <h3 className="text-white">Stripe checkout loaded {getFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;
