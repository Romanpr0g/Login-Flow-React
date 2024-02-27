import React from "react";
import MainLayout from "../../../templates/App/MainLayout/MainLayout";
import Header from "../../../molecules/App/Homepage/Header/Header";
import FeaturedTeams from "../../../templates/App/FeaturedTeams/FeaturedTeams";
import UpcomingEvents from "../../../templates/App/UpcomingEvents/UpcomingEvents";
import "./style.css"

const Homepage = () => {
  return (
    <MainLayout>
      <Header />
      <div className="split-content">
        <FeaturedTeams />
        <UpcomingEvents />
      </div>
    </MainLayout>
  );
};

export default Homepage;
