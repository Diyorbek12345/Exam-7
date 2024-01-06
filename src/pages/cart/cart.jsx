import React, { useState } from "react";
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

export const Cart = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.user.cart);
  const [rem, setRem] = useState([]);

  const handleInc = (id) => {
    const updatedCart = cart?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: (item.qty = +1),
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = cart?.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // navigate("/cart");
  };

  return (
    <div className="pt-100 mt-100">
      {cart?.map((product) => (
        <div key={product.id} className="d-flex mt-10 items-center">
          <section className="h-100 gradient-custom">
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center my-4">
                <MDBCol md="8">
                  <MDBCard className="mb-4">
                    <MDBCardHeader className="py-3">
                      <MDBTypography tag="h5" className="mb-0">
                        Overal items: {cart.length}
                      </MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBRow className="d-flex">
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleTag="div"
                            rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <img src={product.img} alt="" />
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                          <p>
                            <strong>{product.brand}</strong>
                          </p>
                          <p>{product.model}</p>

                          <MDBTooltip title="Remove item">
                            <img src={trash} alt="" />
                          </MDBTooltip>
                        </MDBCol>

                        <MDBCol>
                          <div className="d-flex mb-4">
                            <button className="px-3 me-2 bg-blue-600">-</button>
                            <p>{product.qty}</p>
                            <button className="px-3 me-2 bg-blue-600 ml-2">
                              +
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>${product.price}</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>

                      <hr className="my-4" />
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardHeader>
                      <MDBTypography tag="h5" className="mb-0">
                        Summary
                      </MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBListGroup flush>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          <span>$53.98</span>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>Gratis</span>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">(including VAT)</p>
                            </strong>
                          </div>
                          <span>
                            <strong>$53.98</strong>
                          </span>
                        </MDBListGroupItem>
                      </MDBListGroup>

                      <MDBBtn block size="lg" className="uppercase">
                        checkout
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      ))}
    </div>
  );
};
