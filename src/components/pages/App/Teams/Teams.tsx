import React from "react";
import TeamsHeader from "../../../molecules/App/Homepage/TeamsHeader/TeamsHeader";
import FeaturedTeams from "../../../templates/App/FeaturedTeams/FeaturedTeams";
import "./style.scss";

const Teams: React.FC = () => {
  return (
    <>
      <TeamsHeader />
      <div className="teams-block">
        <FeaturedTeams />
      </div>
    </>
  );
};

export default Teams;
