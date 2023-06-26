import { useState } from "react";
import validateInput from "./form-validation";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Subscribe = () => {
  const [enteredLocation, setLocation] = useState("");

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = validateInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = validateInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = validateInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const resetLocation = () => {
    setLocation("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetLocation();
  };

  return (
    <div className="p-[20px] lg:p-[40px] lg:max-w-[630px] w-full lg:h-[90vh] mb-[100px] lg:mb-0 overflow-scroll">
      <h2 className="page-title">Subscribe to Proof</h2>
      <p className="page-text mb-[30px]">
        Want the latest articles in your inbox? Subscribe - it's free! Just give
        us your contact info and you're on your way.
      </p>
      <div>
        <form
          onSubmit={submitHandler}
          className="text-[16px] flex flex-wrap justify-between"
        >
          <div className="w-full sm:w-[48%]">
            <input
              className={
                firstNameHasError ? "form-input  border-red-500" : "form-input "
              }
              type="text"
              placeholder="First Name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter your first name!
              </p>
            )}
          </div>
          <div className="w-full sm:w-[48%]">
            <input
              className={
                lastNameHasError ? "form-input  border-red-500" : "form-input "
              }
              type="text"
              placeholder="Last Name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className="text-red-500 mb-3 capitalize">
                Please enter your last name!
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
                Please enter a valid email address!
              </p>
            )}
          </div>
          <input
            className="form-input w-full"
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
            placeholder="What's you favorite location? (Optional)"
          />
          <button
            disabled={!formIsValid}
            className="form-button disabled:bg-slate-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
