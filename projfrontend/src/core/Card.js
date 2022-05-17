import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  reload = undefined
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
   
  const cardTitle = product ? product.name : "A Photo from pexels";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true))
  }
   
  const getARedirect = (redirect) => {
    if(redirect){
      return <Redirect to="/cart"/>
    }
  }


  const showAddtoCart = addtoCart => {
    return (
      addtoCart && (
        <button
                onClick={addToCart}
                className="btn btn-outline-success w-100 mt-2 mb-2"
              >
                Add to Cart
              </button>
      )
    )
  }

  const showRemoveFromCart = removeFromCart => {
    return(
      removeFromCart && (
        <button
                 onClick={() => {
              removeItemFromCart(product._id);
              setReload(!reload);
              }}
                className="btn btn-outline-danger w-100 mt-2 mb-2"
              >
                Remove from cart
              </button>
      )
    )
  }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead text-center">{cardTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap text-center">
            {cardDescription}
          </p>
          <div class="col-md-12 text-center">
        <button className="btn btn-success rounded btn-sm px-4">$ {cardPrice}</button>
        </div>
          <div className="row">
            <div className="col-12">
              {showAddtoCart(addtoCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };
    
  export default Card
