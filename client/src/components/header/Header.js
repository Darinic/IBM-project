import React from "react";
import { Link } from "react-router-dom";
import StockPicture from "../../assets/img/stock-logo.png";
import "./Header.css";

export default () => {
  return (
    <div className="header">
      <div className="navigation">
        <Link className="item" style={{ textDecoration: "none" }} to="/">
          <div className="logo">
            <img className="header-logo" src={StockPicture} alt="Stock logo" />
            <div className="homepage-link">Homepage</div>
          </div>
        </Link>
        <Link
          className="item search"
          style={{ textDecoration: "none" }}
          to="/Search"
        >
          Search
        </Link>
      </div>
    </div>
  );
};
