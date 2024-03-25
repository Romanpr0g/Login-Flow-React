import React from "react";
import team from "../../../../../assets/img/team2.png";
import BackButton from "../../../../atoms/App/BackButton/BackButton";
import DeleteButton from "../../../../atoms/App/DeleteButton/DeleteButton";

import "./style.scss";
const TeamDetailsHeader: React.FC = () => {
  return (
    <div className="team-details__header">
      <div className="team-details__header--return">
        <BackButton to="/teams" name="Teams" />
      </div>

      <div className="team-details__team-info">
        <div className="team-info__block">
          <img src={team} alt="team" className="team-info__image--uploader"/>
          <h4 className="team-info__title">Wildkard U12s</h4>
        </div>
        <DeleteButton name="Team" width={113} height={40} />
      </div>
    </div>
  );
};

export default TeamDetailsHeader;
