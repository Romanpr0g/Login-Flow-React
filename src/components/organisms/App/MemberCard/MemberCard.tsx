import React from "react";
import { ReactComponent as Drag } from "../../../../assets/svg/drag.svg";
import { ReactComponent as Person } from "./../../../../assets/svg/person.svg";
import { ReactComponent as Remove } from "../../../../assets/svg/remove.svg";
import FilterSelect from "../../../atoms/App/FilterSelect/FilterSelect";
import type { Members } from "../../../../types/api";
import "./style.scss";

type MemberCardProps = {
  card: Members;
};

const MemberCard: React.FC<MemberCardProps> = ({ card }) => {
  return (
    <li className="mamber-card__item">
      <div className="member-card__person-block">
        <Drag />
        <div className="member-card__img">
          <Person className="member-card__icon" />
        </div>
        <div className="member-card__name-block">
          <h3 className="member-card__name">{card.name}</h3>
          <p className="member-card__role">{card.patronymic}</p>
        </div>
        <p className="member-card__telephone">{card.telephoneNumber}</p>
      </div>
      {card.pendingStatus && (
        <p className="member-card__pending-status">pending</p>
      )}
      <div className="member-card__details-block">
        <FilterSelect
          classname="member-card__filter"
          defaultValue={card.role}
        />
        <Remove className="member-card__remove-icon" />
      </div>
    </li>
  );
};

export default MemberCard;
