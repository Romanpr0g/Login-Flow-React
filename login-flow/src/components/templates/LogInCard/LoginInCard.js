import React, { useState } from "react";
import Welcome from "../../molecules/Welcome/Welcome";
import PhoneNumber from "../../organisms/PhoneNumber/PhoneNumber";
import "./style.css";

const LogInCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);

  return (
    <>
      <Welcome />
      <h3 className="subtitle">Log in</h3>
      <p className="telephone--info">
        Please enter your phone number to receive the verification code.
      </p>
      <div className="phone__block">
        <label className="phone__label">Phone number</label>
        <PhoneNumber
          onValidChange={setValid}
          onPhoneNumberChange={setPhoneNumber}
        />
      </div>
      <button
        className="continue--btn"
        disabled={!valid}
      >
        Continue
      </button>
    </>
  );
};

export default LogInCard;
