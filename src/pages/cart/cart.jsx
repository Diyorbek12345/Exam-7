import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../../redux/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.user.cart);
  const quantity = useSelector((state) => state.user.quantity);
  console.log(cart);
  return (
    <div className="">
      {cart?.map((product) => (
        <div key={product.id} className="d-flex mt-10 items-center">
          )
          <div className="col-md-6 mb-10">
            <img
              src={product.img}
              alt={product.name}
              height="150px"
              width="250px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="category uppercase text-black">
              {product.category}
            </h4>
            <h1 className="display-5">{product.brand}</h1>
            <h2 className="display-6">{product.model}</h2>

            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <div className="btns text-center">
              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  dispatch(INCREMENT(product.id));
                }}
              >
                +
              </button>

              <span className="text-xs ml-2 mr-2">{quantity}</span>

              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  dispatch(DECREMENT(product.id));
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
