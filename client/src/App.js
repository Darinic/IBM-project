import React, { useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Search from "./components/search/Search";
import Stock from "./components/stock/Stock";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/search"
            element={
              <Search
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                results={results}
                setResults={setResults}
              />
            }
          />
          <Route
            path="/stock"
            element={
              <Stock
                startDate={startDate}
                endDate={endDate}
                results={results}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
