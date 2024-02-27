import React, { useState } from "react";
import InputMask from "react-input-mask";
import { ReactComponent as Cross } from "../../../../assets/svg/cross.svg";
import "./style.css";

const PhoneInput = ({
  mask,
  placeholder,
  length,
  onValidChange,
  onPhoneNumberChange,
  phoneNumber,
}) => {
  const [showCross, setShowCross] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCrossClick = () => {
    setInputValue("");
    setShowCross(false);
    onValidChange(false);
    onPhoneNumberChange("");
  };

  const handleInputChange = (e) => {
    const filteredValue = e.target.value.replace(/[^\d]/g, "");
    setInputValue(filteredValue);
    setShowCross(filteredValue.length > 0);
    if (length > filteredValue.length) {
      onValidChange(false);
    }
    onPhoneNumberChange(filteredValue);
  };
  return (
    <>
      <InputMask
        mask={mask}
        maskChar=""
        className="phone--input"
        placeholder={placeholder}
        value={phoneNumber.replace(/[^\d]/g, "")}
        onChange={handleInputChange}
      />
      {showCross && (
        <Cross className="input--cross" onClick={handleCrossClick} />
      )}
    </>
  );
};

export default PhoneInput;
