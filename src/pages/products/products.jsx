import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      // ?limit=4
      if (componentMounted) {
        const apiData = await res.json();
        setData(apiData);
        setFilter(apiData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's cloth
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's cloth
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelary
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="row justify-content-center mb-5">
          {filter.map((product, index) => (
            <Card
              className="mb-3 ml-3"
              key={index}
              style={{ width: "18rem", gap: "10px" }}
            >
              <Card.Img src={product.image} height="250px" />
              <Card.Body className="">
                <Card.Title className="mb-0 text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="text-center uppercase">
                  {product.brand}
                </Card.Text>
                <Card.Text className="text-center text-red-500">
                  {product.model}
                </Card.Text>
                <Card.Text className="text-center lead fw-bolder">
                  {product.price} $
                </Card.Text>
                <Link to={`/products/${product.id}`}>
                  <Button className="mt-10 btn btn-outline-dark ml-20">
                    Buy now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const total = filter.length;

  return (
    <div className="container mt-20">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <h1>Total: {total}</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};
