import React from "react";
import Skeleton from "../../../../atoms/App/Skeleton/Skeleton";
import "./style.css";

const TeamCardSkeleton = () => {
  return (
    <li className="team-card__block">
      <div className="team-card__img">
        <Skeleton width="44px" height="44px" radius="50%" />
      </div>
      <div className="team-card__info--skeleton">
        <Skeleton width="126px" height="22px" radius="8px" />
        <Skeleton width="126px" height="14px" radius="8px" />
      </div>
    </li>
  );
};

const FeaturedTeamSkeleton = () => {
  return (
    <div className="featured-teams__block">
      <div className="featured-teams__introduction">
        <Skeleton width="141px" height="20px" radius="8px" />
        <Skeleton width="114px" height="40px" radius="8px" />
      </div>
      <ul className="team-card__list">
        {[...Array(6)].map((_, index) => (
          <TeamCardSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedTeamSkeleton;
