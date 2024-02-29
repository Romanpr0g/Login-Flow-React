import React from "react";
import { ReactComponent as Teams } from "../../../../assets/svg/teams.svg";
import { ReactComponent as Details } from "../../../../assets/svg/details.svg";
import "./style.css";

const TeamCard = ({ team }) => {
  return (
    <li key={team.id} className="team-card__block">
      <div className="team-card__img">
        <Teams className="team-card__icon" />
      </div>
      <div>
        <h4 className="team-card__name">{team.name}</h4>
        <p className="team-card__members">{team.members + " " + "members"}</p>
      </div>
      <Details className="team-card__details" />
    </li>
  );
};

export default TeamCard;
