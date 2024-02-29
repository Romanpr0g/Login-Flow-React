import React from "react";
import { ReactComponent as Ball } from "./../../../../../assets/svg/ball.svg";
import { ReactComponent as ChevronDown} from "../../../../../assets/svg/icn_inner.svg"
import "./style.css"

const ClubSelect = () => {
  return (  
    <div className="club-select">
      <div className="club-select__image">
        <Ball className="club-select__icon" />
      </div>
      <div className="club-select__info">
        <p className="select-info__club">Club</p>
        <h3 className="select-info__team">Ferncreek Optimist</h3> 
      </div>
      <ChevronDown className="club-select__chevron" />
    </div>
  );
}
 
export default ClubSelect;