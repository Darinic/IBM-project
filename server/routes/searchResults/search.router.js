const express = require("express");

const searchRouter = express.Router();

const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.api_key;
const finnhubClient = new finnhub.DefaultApi();

// Was supposed to search for company names in search and extract ticker symbols for the ticker axios search, it sort of worked.
// but it didn't fetch me all the ticker data only some of them. So I had to abandon this search and perform a ticker search.

// searchRouter.get("/:company",  (req, res, next) => {
//   console.log("GET REQUEST in company");
//   const company = req.params.company;
//   finnhubClient.symbolSearch(
//      company,
//     (error, data, response) => {
//       if (Object.keys(data).length > 0) {
//         return res.json({
//             status: 'success', message: data});
//       } else {
//         return res.json({
//           message: "No company found", status: 'danger',
//         });
//       }
//     }
//   );

// });

searchRouter.get("/tickers/:ticker", (req, res, next) => {
    console.log("GET REQUEST in ticker")
    const ticker = req.params.ticker;
    finnhubClient.companyProfile2({'symbol': ticker}, (error, data, response) => {
        console.log(data.name)
        if (Object.keys(data).length > 0) {
            return res.json({
                status: 'success', message: data});
          } else {
            return res.json({
              message: "No company found", status: 'danger',
            });
          }
            });
    });

searchRouter.get("/stock/stock", (req, res, next) => {
    console.log("GET REQUEST in stock")
    const stock = req.query.stock
    const startDate = req.query.startDate
    const endDate = req.query.endDate
    console.log(stock, startDate, endDate)
    finnhubClient.stockCandles(`${stock}`, "1", `${startDate}`, `${endDate}`, (error, data, response) => {
        console.log(data)
      });
    // finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
    //     console.log(data)
    //   });
})

module.exports = searchRouter;
