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
          className={
            showArticle
              ? "shadow-inner-green text-green"
              : "shadow-inner-gray text-gray hover:border-b hover:border-gray"
          }
        >
          <p className="px-[22px] py-[19px] cursor-pointer ">Articles</p>
        </div>
        <div
          onClick={suggestClickHandler}
          className={
            showSuggest
              ? "shadow-inner-green text-green"
              : "shadow-inner-gray text-gray hover:border-b hover:border-gray"
          }
        >
          <p className="px-[22px] py-[19px] cursor-pointer">Suggest</p>
        </div>
        <div
          onClick={subscribeClickHandler}
          className={
            showSubscribe
              ? "shadow-inner-green text-green"
              : "shadow-inner-gray text-gray hover:border-b hover:border-gray"
          }
        >
          <p className="px-[22px] py-[19px] cursor-pointer">Subscribe</p>
        </div>
        <div
          onClick={aboutClickHandler}
          className={
            showAbout
              ? "shadow-inner-green text-green"
              : "shadow-inner-gray text-gray hover:border-b hover:border-gray"
          }
        >
          <p className="px-[22px] py-[19px] cursor-pointer">About</p>
        </div>
      </div>
      <div>
        {showArticle && <Article />}
        {showSuggest && <Suggest />}
        {showSubscribe && <Subscribe />}
        {showAbout && <About />}
      </div>
    </div>
  );
};

export default Navigation;
