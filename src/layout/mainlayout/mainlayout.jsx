import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../header/header";

// Import your CSS stylesheet for MainLayout

export const MainLayout = () => {
  return (
    <div
      style={{
        minHeight: "99vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="main-layout-container"
    >
      <div className="wrapper">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};
