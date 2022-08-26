import stocks from "../../assets/img/stockPic.jpg";
import "./Homepage.css";

export default () => {
  return (
    <div className="container">
      <div className="intro-row row clearfix">
        <div className="intro-left col-sm-6">
          <div className="intro-text">
            <h1>Company and stock price checker </h1>
            <p>
              Be responsible for your own investements. We will help you to make
              the right decision. With this tool you can check companies stock
              price and see if you are in the right place.
            </p>
          </div>
          <div className="intro-buttons">
            <a href="/Search" className="ui button primary">
              Search Engine
            </a>
          </div>
        </div>
        <div className="intro-right col-sm-6">
          <img className="titlePicture" src={stocks} alt="stock picture" />
        </div>
      </div>
    </div>
  );
};
