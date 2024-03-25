import React from "react";
import MainLayout from "../../../templates/App/MainLayout/MainLayout";
import TeamsHeader from "../../../molecules/App/Homepage/TeamsHeader/TeamsHeader";
import axios from "axios";
import FeaturedTeams from "../../../templates/App/FeaturedTeams/FeaturedTeams";
import FeaturedTeamsHeader from "../../../molecules/App/Homepage/FeaturedTeamsHeader/FeaturedTeamsHeader";
import "./style.scss";

const Teams: React.FC = () => {
  // const resolve: object = axios.get()
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
