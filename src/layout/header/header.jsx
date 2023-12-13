// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import style from "./style.module.css";
// import login from "../../assets/login.svg";
// import korzina from "../../assets/korzina.png";

// // const Links = styled.li`
// //   color: white;
// //   font-size: 22px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 1px;
// // `;

// const Links = styled.li`
//   color: white;
//   font-size: 22px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// const UL = styled.ul`
//   display: flex;
//   align-items: center;
//   gap: 30px;
// `;

// const H1 = styled.h1`
//   font-size: 24px;
//   font-weight: 700;
//   letter-spacing: 1;
//   color: orange;
//   text-transform: uppercase;
// `;

// const Headerlogo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Buttonwrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const Loginbtn = styled.button`
//   gap: 10px;
//   padding: 10px 20px;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   color: white;
//   border: 2px solid white;
//   background-color: transparent;
// `;

// export const Header = () => {
//   return (
//     <header className=" bg-blue-900">
//       <Wrapper className="container">
//         <Link to="/">
//           <Headerlogo>
//             <div className="content">
//               <Link to="/">
//                 <H1>e-Shop</H1>
//               </Link>
//             </div>
//           </Headerlogo>
//         </Link>

//         <nav className="">
//           <UL>
//             <Links>
//               <Link to="/">Home</Link>
//             </Links>
//             <Links>
//               <Link to="/about">About</Link>
//             </Links>
//             <Links>
//               <Link to="/contact">Contact</Link>
//             </Links>
//             <Links>
//               <Link to="/service">Service</Link>
//             </Links>
//           </UL>
//         </nav>

//         <Buttonwrap>
//           <div className="btn gap-x-2 flex">
//             <Link to="/login">
//               <Loginbtn>
//                 <img className={style.login} src={login} alt="" />
//                 <p>Log in</p>
//               </Loginbtn>
//             </Link>
//           </div>
//           <Link to="/korzinka">
//             <img className={style.korzina} src={korzina} alt="" />
//           </Link>
//         </Buttonwrap>
//         {/* <img src={} alt="" /> */}
//       </Wrapper>
//     </header>
//   );
// };

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import login from "../../assets/login.svg";
import shop from "../../assets/shoping.svg";
import regist from "../../assets/registr.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Cart } from "../../pages/cart/cart";
import { useSelector } from "react-redux";

function Header() {
  const totalNumber = useSelector((state) => state.user.cart);

  return (
    <header className="pb-100">
      <Navbar bg="dark" expand="lg" variant="dark" className="py-3 shadow-lg">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-20">
            D-coolection
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 gap-x-10"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <Nav className="text-base text-white">Home</Nav>
              </Link>
              <Link to="/products">
                <Nav className="text-base text-white">Products</Nav>
              </Link>
              <Link to="/about">
                <Nav className="text-base text-white">About</Nav>
              </Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
              <Link to="/contact">
                <Nav className="text-base text-white">Contact</Nav>
              </Link>
            </Nav>
            {/* <Form className="d-flex pt-2 pb-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

            <div className="buttons d-flex items-center gap-x-2">
              <Link to="/login">
                <a href="" className="btn btn-outline-light d-flex gap-x-2">
                  <img src={login} alt="" />
                  Login
                </a>
              </Link>
              <Link to="/login">
                <a href="" className="btn btn-outline-light d-flex gap-x-2">
                  <img src={regist} alt="" />
                  Registr
                </a>
              </Link>
              <Link to="/cart">
                <button className="btn btn-outline-light d-flex gap-x-2">
                  <img src={shop} alt="" />
                  Cart ({totalNumber.length})
                </button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
