import React from "react";
import Empty from "../Empty/Empty";
import TeamDetailsHeader from "../../../molecules/App/Homepage/TeamDetailsHeader/TeamDetailsHeader";
import TeamRoster from "../TeamRoster/TeamRoster";
import { useLocation } from "react-router-dom";
import "./style.scss";

const TeamDetails: React.FC = () => {
  const { state } = useLocation();
  return (
    <>
      <TeamDetailsHeader team={state.team} />
      <div className="team-details__block">
        <TeamRoster team={state.team}/>
        {/* <div className="team-details__empty">
          <Empty
            title="Members"
            text="team's members"
            buttonText="Add Member"
            buttonWidth={155}
            buttonHeight={48}
            icon
            className="empty--centered"
          />
        </div> */}
      </div>
    </>
  );
};

export default TeamDetails;
