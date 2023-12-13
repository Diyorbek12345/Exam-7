// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MainLayout } from "./layout/MainLayout";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Products } from "./pages/Products";
// import { Login } from "./pages/Login";
// import { Cart } from "./pages/cart";
// import { Product } from "./components/product";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="products" element={<Products />} />
//             <Route path="/products/:id" element={<Product />} />
//             <Route path="/cart/:id" element={<Cart />} />
//             <Route path="login" element={<Login />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Product } from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
