import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.75)]"
      onClick={props.onClick}
    />
  );
};

const ModalContent = (props) => {
  return (
    <div className="fixed top-[30vh] left-[10%] sm:left-[30%] w-[80%] sm:w-[40%] z-50 text-blue bg-[rgb(234,227,248)] rounded-xl font-Roboto-Condensed overflow-hidden p-1">
      <div className="text-center text-[28px] leading-[31px] mt-[25px] mb-[20px]">
        <h2>{props.title}</h2>
      </div>
      <div className="px-10 mb-2 text-[16px] font-Roboto-slab text-center">
        <p>{props.message}</p>
      </div>
      <div className="text-center m-4">
        <button
          className="bg-blue hover:bg-black text-[18px] text-white uppercase px-5 py-1 rounded-sm transition-colors
          "
          onClick={props.onClick}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ModalOverlay;
