import { useState } from "react";
import validateInput from "./form-validation";
import ModalOverlay from "./ModalOverlay";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Suggest = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = validateInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = validateInput(isEmail);

  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = validateInput(isNotEmpty);

  const {
    value: storyValue,
    isValid: storyIsValid,
    hasError: storyHasError,
    valueChangeHandler: storyChangeHandler,
    inputBlurHandler: storyBlurHandler,
    reset: resetStory,
  } = validateInput(isNotEmpty);

  let formIsValid = false;

  if (fullNameIsValid && subjectIsValid && emailIsValid && storyIsValid) {
    formIsValid = true;
  }

  const modalClickHandler = () => {
    setShowModal(!showModal);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFullName();
    resetEmail();
    resetSubject();
    resetStory();
    modalClickHandler();
  };

  return (
    <div className="p-[20px] lg:p-[40px] lg:max-w-[630px] w-full lg:h-[90vh] mb-[50px] lg:mb-0 overflow-scroll">
      {showModal && (
        <ModalOverlay
          title="Thanks! You're awesome"
          message="Your submission has been received and we'll get back to you soon. If it's a great idea we'll feature you in PROOF!
          "
          onClick={modalClickHandler}
        />
      )}
      <h2 className="page-title">Suggest an article</h2>
      <p className="page-text mb-[30px]">
        Proof magazine is a community effort. No one person writes or creates
        awesome stuff. We all play a role people!
      </p>
      <div>
        <form
          onSubmit={submitHandler}
          className="text-[16px] flex flex-wrap justify-between"
        >
          <div className="w-full">
            <input
              className={
                fullNameHasError ? "form-input  border-red-500" : "form-input "
              }
              type="text"
              placeholder="Full Name"
              value={fullNameValue}
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
            />
            {fullNameHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter your first name!
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              className={
                emailHasError ? "form-input  border-red-500" : "form-input "
              }
              type="text"
              placeholder="Email Address"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter a vaild email address!
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              className={
                subjectHasError ? "form-input  border-red-500" : "form-input "
              }
              type="text"
              placeholder="What's the Subject?"
              value={subjectValue}
              onChange={subjectChangeHandler}
              onBlur={subjectBlurHandler}
            />
            {subjectHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter your Subject!
              </p>
            )}
          </div>

          <div className="w-full">
            <textarea
              className={
                storyHasError
                  ? "form-input  h-[150px] border-red-500"
                  : "form-input  h-[150px]"
              }
              value={storyValue}
              onChange={storyChangeHandler}
              onBlur={storyBlurHandler}
              maxlength="5000"
              placeholder="What's the story?"
            />
            {storyHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter your Story!
              </p>
            )}
          </div>

          <button
            disabled={!formIsValid}
            className="form-button disabled:bg-slate-500 disabled:cursor-not-allowed"
          >
            Send suggestion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suggest;
