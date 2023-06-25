import { useState } from "react";
import Article from "./Article";
import Suggest from "./Suggest";
import Subscribe from "./Subscribe";
import About from "./About";

const Navigation = () => {
  const [showArticle, setShowArticle] = useState(true);
  const [showSuggest, setShowSuggest] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const articleClickHandler = () => {
    setShowArticle(true);
    setShowSuggest(false);
    setShowSubscribe(false);
    setShowAbout(false);
  };

  const suggestClickHandler = () => {
    setShowArticle(false);
    setShowSuggest(true);
    setShowSubscribe(false);
    setShowAbout(false);
  };

  const subscribeClickHandler = () => {
    setShowArticle(false);
    setShowSuggest(false);
    setShowSubscribe(true);
    setShowAbout(false);
  };

  const aboutClickHandler = () => {
    setShowArticle(false);
    setShowSuggest(false);
    setShowSubscribe(false);
    setShowAbout(true);
  };

  return (
    <div className="max-w-[800px]">
      <div className="flex w-full text-[14px] font-Roboto-Condensed uppercase tracking-[1px] shadow-gray-bottom">
        <div
          onClick={articleClickHandler}
          className={showArticle ? "nav-style-green" : "nav-style-gray"}
        >
          <p className="nav-text">Articles</p>
        </div>
        <div
          onClick={suggestClickHandler}
          className={showSuggest ? "nav-style-green" : "nav-style-gray"}
        >
          <p className="nav-text">Suggest</p>
        </div>
        <div
          onClick={subscribeClickHandler}
          className={showSubscribe ? "nav-style-green" : "nav-style-gray"}
        >
          <p className="nav-text">Subscribe</p>
        </div>
        <div
          onClick={aboutClickHandler}
          className={showAbout ? "nav-style-green" : "nav-style-gray"}
        >
          <p className="nav-text">About</p>
        </div>
      </div>
      <div>
        {showArticle && <Article clicked={showArticle} />}
        {showSuggest && <Suggest />}
        {showSubscribe && <Subscribe />}
        {showAbout && <About />}
      </div>
    </div>
  );
};

export default Navigation;
