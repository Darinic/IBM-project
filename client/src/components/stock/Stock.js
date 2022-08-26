import React, { useEffect } from "react";
import axios from "axios";
import "./Stock.css";

export default (props) => {
  useEffect(() => {
    axios.get("http://localhost:8000/api/search/stock/stock", {
      params: {
        stock: `${props.results.ticker}`,
        startDate: `${props.startDate}`,
        endDate: `${props.endDate}`,
      },
    });
  }, []);
  return (
    <>
      <div className="row">
        <div className="stockInfo col-sm-6">
          <div className="h1title">
            <h1>Company information</h1>
          </div>
          <p>
            <label>Company name:</label> {props.results.name}
          </p>
          <p>
            <label>Stock exchange:</label> {props.results.exchange}
          </p>
          <p>
            <label>Stock ticker:</label> {props.results.ticker}
          </p>
          <p>
            <label>Country:</label> {props.results.country}
          </p>
          <p>
            <label>Stock currency:</label> {props.results.currency}
          </p>
          <p>
            <label>Industry:</label> {props.results.finnhubIndustry}
          </p>
          <p>
            <label>Website:</label>
            <a href={props.results.weburl}> {props.results.weburl}</a>
          </p>
        </div>
        <div className="col-sm-6 logoPicture">
          <h2>Company logo</h2>
          <img src={props.results.logo} alt="stock logo"></img>
        </div>
      </div>
      <div className="stockChart">
        <h1>Stock Chart</h1>
      </div>
    </>
  );
};
