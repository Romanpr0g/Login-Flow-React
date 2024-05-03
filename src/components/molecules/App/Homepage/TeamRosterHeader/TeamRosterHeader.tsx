import React from "react";
import CreateButton from "../../../../atoms/App/CreateButton/CreateButton";
import "./style.scss";

type Team = {
  id: number;
  name: string;
  members: number;
};

type TeamRosterHeaderProps = {
  team: Team;
};

const TeamRosterHeader: React.FC<TeamRosterHeaderProps> = ({ team }) => {
  return (
    <div className="team-roster-header__block">
      <div className="team-roster-header__info-block">
        <h4 className="team-roster-header__title">Team Roster</h4>
        <span className="team-roster-header__members" >{team.members} Members</span>
      </div>
      <CreateButton name="Add Member" width={161} height={48} icon />
    </div>
  );
};

export default TeamRosterHeader;
