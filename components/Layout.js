import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
