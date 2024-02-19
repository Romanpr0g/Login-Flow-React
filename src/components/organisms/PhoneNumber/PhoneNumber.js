import React, { useState, useEffect } from "react";
import CountrySelect from "../../molecules/CountrySelect/CountrySelect";
import PhoneInput from "../../molecules/PhoneInput/PhoneInput";
import "./style.css";

const PhoneNumber = ({ onValidChange, onPhoneNumberChange }) => {
  const [selectedMask, setSelectedMask] = useState("(999) 999 99 99");
  const [placeholder, setPlaceholder] = useState("(000) 000 00 00");
  const [length, setLength] = useState(10);
  const [dialCode, setDialCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (value) => {
    switch (value) {
      case "+48":
        setDialCode("+48");
        setSelectedMask("(999) 999 999");
        setPlaceholder("(000) 000 000");
        phoneNumber.length === 13 &&
          setPhoneNumber(phoneNumber.split("").slice(0, -1).join(""));
        setLength(9);
        break;
      case "+375":
        setDialCode("+375");
        setSelectedMask("(99) 999 99 99");
        setPlaceholder("(00) 000 00 00");
        phoneNumber.length === 13 &&
          setPhoneNumber(phoneNumber.split("").slice(0, -1).join(""));
        setLength(9);
        break;
      case "+7":
        setDialCode("+7");
        setSelectedMask("(999) 999 99 99");
        setPlaceholder("(000) 000 00 00");
        setLength(10);
        break;
      case "+1":
        setDialCode("+1");
        setSelectedMask("(999) 999 99 99");
        setPlaceholder("(000) 000 00 00");
        setLength(10);
        break;
      default:
        setSelectedMask("");
        setPlaceholder("");
    }
  };

  const handleFocus = (isFocused) => {
    setIsFocused(isFocused);
  };

  const handlePhoneChange = (phoneNumber) => {
    const phoneArr = String(phoneNumber).split("");
    const strArr = selectedMask
      .split("")
      .filter((item) => item !== "(" && item !== ")");
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] !== "9") {
        phoneArr.splice(i, 0, " ");
      }
    }
    const phone = phoneArr.join("");
    setPhoneNumber(phone);
  };

  useEffect(() => {
    const filteredValue = phoneNumber.replace(/[^\d]/g, "");
    handlePhoneChange(filteredValue);
    onPhoneNumberChange(dialCode + " " + phoneNumber);
    const isValid = length === filteredValue.length;
    onValidChange(isValid);
  }, [dialCode, phoneNumber]);

  const handleValidChange = (isValid) => {
    onValidChange(isValid);
  };

  return (
    <div className={`phone--container ${isFocused ? "focused" : ""}`}>
      <CountrySelect
        onSelect={handleSelect}
        onFocus={handleFocus}
        onValidChange={handleValidChange}
      />
      <PhoneInput
        mask={selectedMask}
        placeholder={placeholder}
        length={length}
        onValidChange={handleValidChange}
        onPhoneNumberChange={handlePhoneChange}
        phoneNumber={phoneNumber}
      />
    </div>
  );
};

export default PhoneNumber;
