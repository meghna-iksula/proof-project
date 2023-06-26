import React, { Fragment } from "react";
import ReactDOM from "react-dom";

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
    <div className="fixed top-[30vh] left-[10%] sm:left-[30%] w-[80%] sm:w-[40%] z-50 bg-white rounded-xl font-Roboto-Condensed overflow-hidden">
      <div className="p-4 text-center uppercase text-[28px] text-white bg-green">
        <h2>{props.title}</h2>
      </div>
      <div className="p-3 text-[18px] text-center">
        <p>{props.message}</p>
      </div>
      <div className="text-center m-4">
        <button
          className="bg-black hover:bg-blue text-[18px] text-white px-4 py-1 rounded-lg
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
