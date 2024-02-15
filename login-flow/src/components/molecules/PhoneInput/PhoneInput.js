import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./style.css"

const PhoneInput = ({ mask, placeholder, onPhoneNumberChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => { 
    const filteredValue = e.target.value.replace(/[^\d]/g, "");
    setInputValue(filteredValue);
    onPhoneNumberChange(filteredValue);
  };

  return (
    <>
      <InputMask
        mask={mask}
        maskChar=""
        className="phone--input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default PhoneInput;