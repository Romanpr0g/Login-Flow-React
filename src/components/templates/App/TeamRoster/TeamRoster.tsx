import React from "react";
import TeamRosterHeader from "../../../molecules/App/Homepage/TeamRosterHeader/TeamRosterHeader";
import FilterSelect from "../../../atoms/App/FilterSelect/FilterSelect";
import MemberCard from "../../../organisms/App/MemberCard/MemberCard";
import type { Team, Members } from "../../../../types/api";
import "./style.scss";

type TeamRosterProps = {
  team: Team;
  members: any;
};

const TeamRoster: React.FC<TeamRosterProps> = ({ team, members }) => {
  return (
    <div className="team-roster__wrapper">
      <TeamRosterHeader team={team} />
      <FilterSelect
        classname="team-roster__filter"
        defaultValue="Filter by Role"
      />
      <ul className="team-roster__list">
        {members.map((card: Members) => (
          <MemberCard key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default TeamRoster;
