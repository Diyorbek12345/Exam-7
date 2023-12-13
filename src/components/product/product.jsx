// import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import { Link, redirect, useParams } from "react-router-dom";
// import rate from "../../assets/star.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { AddCard } from "../../redux/cartSlice";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import rate from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "../../redux/cartSlice";
// import { addCart } from "../../redux/cartSlice";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  // const addProduct = (product) => {
  //   dispatch(AddCard(product))
  // }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/clothes/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProducts();
  }, [id]);

  const Loading = () => {
    return (
      <div>
        <div className="col-md-3">
          <Skeleton key={1} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton key={2} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton key={3} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton key={4} height={350} />
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mb-10">
          <img
            src={product.img}
            alt={product.name}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className=" category uppercase text-black">{product.category}</h4>
          <h1 className="display-5">{product.brand}</h1>
          <h2 className="display-6">{product.model}</h2>
          <p className="lead fw-bolder d-flex">
            Rating: {product.rate}
            <img src={rate} alt="" />
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>

          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => dispatch(AddCard(product))}
          >
            Add to Cart
          </button>

          <Link to="/cart">
            <button className="btn btn-outline-dark ms-2 px-3 py-2">
              Go to Cart
            </button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="container mt-20 py-5 ">
      <div className="row justify-content-center py-4">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};
