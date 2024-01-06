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
import style from "./header.module.css";

function Header() {
  const totalNumber = useSelector((state) => state.user.cart);

  return (
    <header className={style.header}>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        className="py-3 shadow-lg mt-100"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand href="#" className="fw-bold fs-20">
              D-coolection
            </Navbar.Brand>
          </Link>
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

              <Link to="/contact">
                <Nav className="text-base text-white">Contact</Nav>
              </Link>
            </Nav>

            <div className="buttons d-flex items-center gap-x-2">
              <Link to="/login">
                <button className="btn btn-outline-light d-flex gap-x-2">
                  <img src={login} alt="" />
                  Login
                </button>
              </Link>
              <Link to="/registr">
                <button className="btn btn-outline-light d-flex gap-x-2">
                  <img src={regist} alt="" />
                  Registr
                </button>
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
