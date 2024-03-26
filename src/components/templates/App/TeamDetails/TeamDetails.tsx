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
          <Empty
            title="Members"
            text="team's members"
            buttonText="Add Member"
            buttonWidth={155}
            buttonHeight={48}
            icon
            className="empty--centered"
          />
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
