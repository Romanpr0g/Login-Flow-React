import React from "react";
import Empty from "../Empty/Empty";
import TeamDetailsHeader from "../../../molecules/App/Homepage/TeamDetailsHeader/TeamDetailsHeader";
import "./style.scss";

const TeamDetails: React.FC = () => {
  return (
    <>
      <TeamDetailsHeader />
      <div className="team-details__block">
        <div className="team-details__empty">
          <Empty name="members" className={"emty-block--center"} buttonWidth={155} buttonHeight={48} />
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
