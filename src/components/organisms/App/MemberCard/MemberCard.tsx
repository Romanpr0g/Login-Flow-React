import React from "react";
import { ReactComponent as Drag } from "../../../../assets/svg/drag.svg";
import { ReactComponent as Person } from "./../../../../assets/svg/person.svg";
import { ReactComponent as Remove } from "../../../../assets/svg/remove.svg";
import FilterSelect from "../../../atoms/App/FilterSelect/FilterSelect";
import ImgUploader from "../../../atoms/App/ImgUploader/ImgUploader";
import "./style.scss";

type Team = {
  id: number;
  name: string;
  members: number;
};

type MemberCardProps = {
  team: Team;
};

const MemberCard: React.FC<MemberCardProps> = ({}) => {
  return (
    <li className="mamber-card__item">
      <div className="member-card__person-block">
        <Drag />
        <div className="member-card__img">
          <Person className="member-card__icon" />
        </div>
        <div className="member-card__name-block">
          <h3 className="member-card__name">Team member</h3>
          <p className="member-card__role">mdrummond</p>
        </div>
        <p className="member-card__telephone">349-494-9932</p>
      </div>
      <p className="member-card__pending-status">pending</p>
      <div className="member-card__details-block">
        <FilterSelect classname="member-card__filter" defaultValue="Athelete"/>
        <Remove className="member-card__remove-icon" />
      </div>
    </li>
  );
};

export default MemberCard;
