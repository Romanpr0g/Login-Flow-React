import React from "react";
import TeamRosterHeader from "../../../molecules/App/Homepage/TeamRosterHeader/TeamRosterHeader";
import FilterSelect from "../../../atoms/App/FilterSelect/FilterSelect";
import "./style.scss";

type Team = {
  id: number;
  name: string;
  members: number;
};

type TeamRosterProps = {
  team: Team;
};

const TeamRoster: React.FC<TeamRosterProps> = ({ team }) => {
  return (
    <div className="team-roster__wrapper">
      <TeamRosterHeader team={team} />
      <FilterSelect />
      <ul className="team-roster__list"></ul>
    </div>
  );
};

export default TeamRoster;
