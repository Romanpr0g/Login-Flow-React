import React from "react";
import Welcome from "../../molecules/Welcome/Welcome";
import PhoneIinput from "../../organisms/PhoneInput/PhoneInput"
import "./style.css";

const LogInCard = () => {
  return (
    <>
      <Welcome />
      <h3 className="subtitle">Log in</h3>
      <p className="telephone--info">
        Please enter your phone number to receive the verification code.
      </p>
      <div className="phone__block">
        <label className="phone__label">Phone number</label>
        <PhoneIinput />
      </div>
    </>
  );
};

export default LogInCard;
