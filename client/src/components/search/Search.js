import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "././Search.css";
import Datepicker from "../datepicker/Datepicker";
import axios from "axios";
import SearchResults from "../searchResults/SearchResults";
import Alert from "react-bootstrap/Alert";

export default (props) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const CorrectSearch = e.target.value.replace(/[^A-Za-z ]/gi, "");
    setSearch(CorrectSearch);
  };

  const handleSubmit = async (search) => {
    if (
      search.length < 2 ||
      props.startDate === "" ||
      props.endDate === "" ||
      props.endDate < props.startDate
    ) {
      setError(true);
      setErrorMessage(
        "Please enter a correct search term, a start and end date"
      );
    } else {
      await axios
        .get(`http://localhost:8000/api/search/tickers/` + search)
        .then((res) => {
          if (res.data.status === "success") {
            setError(false);
            props.setResults(res.data.message);
            console.log(props.results);
          } else {
            setError(true);
            setErrorMessage(res.data.message);
            console.log(errorMessage);
          }
        })
        .catch((err) => {
          setError(true);
          setErrorMessage(err.message);
        });
    }
  };
  
  return (
    <>
      {error && (
        <div className="errorMsg">
          <Alert
            variant="danger"
            style={{ width: "360px", margin: "auto", textAlign: "center" }}
          >
            {errorMessage}
          </Alert>
        </div>
      )}
      <div className="search-window">
        <div className="card-body">
          <input
            type="text"
            placeholder="Look up a Ticker..."
            value={search}
            onChange={handleChange}
            maxLength={35}
            minLength={1}
          />
          <Button
            variant="success"
            type="submit"
            onClick={() => handleSubmit(search)}
          >
            Search
          </Button>
        </div>
        <div className="datepickers">
          <Datepicker
            startDate={props.startDate}
            setStartDate={props.setStartDate}
            endDate={props.endDate}
            setEndDate={props.setEndDate}
          />
        </div>
        {Object.keys(props.results).length === 0 ? (
          <div className="notFound">Please perform a search </div>
        ) : (
          <SearchResults results={props.results} />
        )}
      </div>
    </>
  );
};
