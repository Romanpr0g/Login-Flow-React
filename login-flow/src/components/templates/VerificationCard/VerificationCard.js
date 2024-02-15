import { ReactComponent as Arrow } from "./../../../assets/svg/arrow.svg";
import "./style.css";
import Welcome from "./../../molecules/Welcome/Welcome";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

import { NavLink, useNavigate, useLocation } from "react-router-dom";

const VerificationCard = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const { phoneNumber = "" } = state || {};
  const navigate = useNavigate();
  const [incorrect, setIncorrect] = useState(false);

  const handleOtpChange = async (enteredOtp) => {
    setIncorrect(false);
    setOtp(enteredOtp);
    if (enteredOtp.length === 5) {
      setLoading(true);
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: enteredOtp }),
      }).then((response) => response.json());
      setLoading(false);
      if (response.success) {
        navigate("/verify/success");
      } else {
        setIncorrect(true);
        setOtp("");
      }
    }
  };

  return (
    <>
      <NavLink to="/" className="btn--back">
        <Arrow className="back__img" />
        <span className="btn--back__text">Back</span>
      </NavLink>
      <Welcome />
      <h3 className="subtitle">Verification code</h3>
      <p className="telephone--info">
        Please enter the verification code sent to number
        <br />
        <strong>{phoneNumber}</strong>
      </p>
      <div className="auth--block">
        <OtpInput
          inputStyle={`inputStyle ${incorrect ? "incorrect" : ""}`}
          inputType="tel"
          value={otp}
          onChange={handleOtpChange}
          placeholder="00000"
          numInputs={5}
          renderInput={(props) => <input {...props} disabled={loading} />}
          shouldAutoFocus
        />
        {incorrect && <p className="auth--incorrect">Invalid verification code</p>}
      </div>
      <button className="btn--res">Resend code</button>
    </>
  );
};

export default VerificationCard;
