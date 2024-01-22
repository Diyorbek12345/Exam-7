import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import trash from "../../assets/delete.svg";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import back from "../../assets/back.svg";

export const Cart = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.user.cart);
  const quantity = useSelector((state) => state.user.quantity);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    {
      fetch("https://fakestoreapi.com/products").then((result) => {
        result.json().then((resp) => {
          setProduct(resp);
          getProducts();
        });
      });
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const HandleRemove = (id) => {
    {
      fetch(`https://fakestoreapi.com/carts/${id}`, {
        method: "DELETE",
      }).then((res) => {
        res.json().then((result) => {
          // console.log(result);
          getProducts();
        });
      });
    }
  };
  //  console.log(increment);

  return (
    <div className="pt-100 mt-100">
      <section className="h-100 gradient-custom mt-10">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    Overall items: {cart.length}
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow className="d-flex">
                    {cart.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="d-flex mt-2 items-center"
                        >
                          <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                            <MDBRipple
                              rippleTag="div"
                              rippleColor="light"
                              className="bg-image rounded hover-zoom hover-overlay"
                            >
                              <img src={product.image} alt="" />
                            </MDBRipple>
                          </MDBCol>

                          <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0 ml-5">
                            <p>
                              <strong>{product.title}</strong>
                            </p>
                            <p>{product.category}</p>
                            <button
                              onClick={() => HandleRemove(product.id)}
                              className=" mt-8 pt-2 pl-2 pb-2 pr-2 bg-blue-600"
                            >
                              <img src={trash} alt="" />
                            </button>
                          </MDBCol>

                          <MDBCol>
                            <div className="d-flex mb-4 ml-5">
                              <button
                                className="px-3 me-2 bg-blue-600"
                                onClick={() => decrement()}
                              >
                                -
                              </button>
                              <p>{count}</p>
                              <button
                                className="px-3 me-2 bg-blue-600 ml-2"
                                onClick={() => increment()}
                              >
                                +
                              </button>
                            </div>

                            <div className="d-flex gap-5 items-center">
                              <p className="text-start text-md-center">
                                <span>price</span>
                                <strong>${product.price}</strong>
                              </p>
                              <p className="text-start text-md-center">
                                <span>TOTAL</span>
                                <strong>{count * product.price}</strong>
                              </p>
                            </div>
                          </MDBCol>
                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <Link to="/products" className="d-flex items-center gap-2">
            <img src={back} alt="" />
            <h1 className="uppercase fw lead">Back to shopping</h1>
          </Link>
        </MDBContainer>
      </section>
    </div>
  );
};
