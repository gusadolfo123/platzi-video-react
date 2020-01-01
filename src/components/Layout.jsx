import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/app.scss";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
