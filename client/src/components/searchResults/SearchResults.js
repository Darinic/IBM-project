import React from "react";
import "./SearchResults.css";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();

  const weburl = props.results.weburl;

  return (
    <>
      <div className="row searchtile" style={{cursor:'pointer'}} onClick={() => navigate("/stock")}>
        <div className="col-sm-3 tileText">
          <label>Company name:</label>
          <h6>{props.results.name}</h6>
        </div>
        <div className="col-sm-2 tileText">
          <label>Country:</label>
          <h6>{props.results.country}</h6>
        </div>
        <div className="col-sm-1 tileText">
          <label>Currency:</label>
          <h6>{props.results.currency}</h6>
        </div>
        <div className="col-sm-6 tileText">
          <label>Website:</label>
          <a href={weburl} target="_blank">
            <h6>{props.results.weburl}</h6>
          </a>
        </div>
      </div>
    </>
  );
};
