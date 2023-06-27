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
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

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
    <div className="lg:max-w-[800px]">
      <div className="flex justify-end md:hidden shadow-gray-bottom text-[14px] font-Roboto-Condensed uppercase tracking-[1px]">
        <p
          onClick={menuHandler}
          className="nav-text text-gray inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          Menu
        </p>
      </div>

      <div
        className={
          showMenu
            ? "h-44 md:h-auto overflow-hidden shadow-gray-bottom transition-[height] ease-in"
            : "h-0 md:h-auto shadow-gray-bottom transition-[height] ease-in overflow-hidden"
        }
      >
        <div className="md:flex w-full bg-black md:bg-white text-[14px] font-Roboto-Condensed uppercase tracking-[1px] shadow-gray-bottom overflow-hidden">
          <div
            onClick={articleClickHandler}
            className={showArticle ? "nav-style-green" : "nav-style-gray"}
          >
            <p onClick={menuHandler} className="nav-text">
              Articles
            </p>
          </div>
          <div
            onClick={suggestClickHandler}
            className={showSuggest ? "nav-style-green" : "nav-style-gray"}
          >
            <p onClick={menuHandler} className="nav-text">
              Suggest
            </p>
          </div>
          <div
            onClick={subscribeClickHandler}
            className={showSubscribe ? "nav-style-green" : "nav-style-gray"}
          >
            <p onClick={menuHandler} className="nav-text">
              Subscribe
            </p>
          </div>
          <div
            onClick={aboutClickHandler}
            className={showAbout ? "nav-style-green" : "nav-style-gray"}
          >
            <p onClick={menuHandler} className="nav-text">
              About
            </p>
          </div>
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
