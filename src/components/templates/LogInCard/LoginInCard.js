import React, { useState } from "react";
import Welcome from "../../molecules/Welcome/Welcome";
import PhoneNumber from "../../organisms/PhoneNumber/PhoneNumber";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LogInCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);

  const handleButtonClick = () => {
    navigate("/login/verify", { state: { phoneNumber } });
  };

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
        onClick={handleButtonClick}
        disabled={!valid}
      >
        Continue
      </button>
    </>
  );
};

export default LogInCard;
