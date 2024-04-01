import React from "react";
import MainLayout from "../../../templates/App/MainLayout/MainLayout";
import Header from "../../../molecules/App/Homepage/Header/Header";
import FeaturedTeams from "../../../templates/App/FeaturedTeams/FeaturedTeams";
import UpcomingEvents from "../../../templates/App/UpcomingEvents/UpcomingEvents";
import FeaturedTeamsHeader from "../../../molecules/App/Homepage/FeaturedTeamsHeader/FeaturedTeamsHeader";
import "./style.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="split-content">
        <FeaturedTeams>
          <FeaturedTeamsHeader />
        </FeaturedTeams>
        <UpcomingEvents />
      </div>
    </>
  );
};

export default Homepage;
