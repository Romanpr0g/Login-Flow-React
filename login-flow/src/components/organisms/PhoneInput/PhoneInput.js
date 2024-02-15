import React, { useState } from "react";
import CountrySelect from "../../molecules/CountrySelect/CountrySelect";
import "./style.css";

const NewTelephone = () => {
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
        length === 10 &&
          setPhoneNumber(phoneNumber.split("").slice(0, -1).join(""));
        setLength(9);
        break;
      case "+375":
        setDialCode("+375");
        setSelectedMask("(99) 999 99 99");
        setPlaceholder("(00) 000 00 00");
        length === 10 &&
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
    console.log(isFocused);
    setIsFocused(isFocused);
  };

  return (
    <div className={`phone--container ${isFocused ? "focused" : ""}`}>
      <CountrySelect onSelect={handleSelect} onFocus={handleFocus} />
    </div>
  );
};

export default NewTelephone;
