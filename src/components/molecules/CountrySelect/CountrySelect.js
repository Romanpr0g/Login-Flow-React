import React from "react";
import { Select } from "antd";
import poland from "./../../../assets/img/flags/poland.jpg";
import belarus from "./../../../assets/img/flags/belarus.png";
import russia from "./../../../assets/img/flags/russia.jpg";
import usa from "./../../../assets/img/flags/usa.png";
import "./style.css";
const CountrySelect = ({ onSelect, onFocus, onValidChange }) => {
  const handleChange = (value) => {
    onSelect(value);
    onValidChange(false);
  };

  const handleDropdownVisibleChange = (visible) => {
    onFocus(visible);
  };

  return (
    <div>
      <Select
        defaultValue="+1"
        className="phone--select"
        dropdownAlign={{ offset: [0, 20] }}
        popupClassName="dropdown--block"
        onDropdownVisibleChange={handleDropdownVisibleChange}
        dropdownStyle={{
          width: 312,
        }}
        style={{
          width: 93,
        }}
        onChange={handleChange}
        options={[
          {
            value: "+48",
            label: (
              <div>
                <img className="flag" src={poland} alt="Poland Flag" />
                <span style={{ marginLeft: 8 }}>+48</span>
              </div>
            ),
          },
          {
            value: "+375",
            label: (
              <div>
                <img className="flag" src={belarus} alt="Belarusian Flag" />
                <span style={{ marginLeft: 8 }}>+375</span>
              </div>
            ),
          },
          {
            value: "+7",
            label: (
              <div>
                <img className="flag" src={russia} alt="Russian Flag" />
                <span style={{ marginLeft: 8 }}>+7</span>
              </div>
            ),
          },
          {
            value: "+1",
            label: (
              <div>
                <img className="flag" src={usa} alt="USA Flag" />
                <span style={{ marginLeft: 8 }}>+1</span>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default CountrySelect;
