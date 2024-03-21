import React from "react";
import clsx from "clsx";
import { ReactComponent as Teams } from "../../../../assets/svg/teams.svg";
import { ReactComponent as Details } from "../../../../assets/svg/details.svg";
import "./style.scss";

const TeamCard = ({ team, children }) => {
  console.log(false);
  return (
    <li
      key={team.id}
      className={clsx("team-card__block", {
        "team-card__teams--page": !children,
      })}
    >
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
