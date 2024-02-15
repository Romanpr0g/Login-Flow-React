import React, { useState } from "react";
import Welcome from "../../molecules/Welcome/Welcome";
import PhoneNumber from "../../organisms/PhoneNumber/PhoneNumber"
import "./style.css";

const LogInCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <Welcome />
      <h3 className="subtitle">Log in</h3>
      <p className="telephone--info">
        Please enter your phone number to receive the verification code.
      </p>
      <div className="phone__block">
        <label className="phone__label">Phone number</label>
        <PhoneNumber onPhoneNumberChange={setPhoneNumber} />
      </div>
    </>
  );
};

export default LogInCard;
