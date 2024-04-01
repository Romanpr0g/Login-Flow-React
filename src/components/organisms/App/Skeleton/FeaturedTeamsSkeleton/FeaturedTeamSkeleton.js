import React from "react";
import clsx from "clsx";
import Skeleton from "../../../../atoms/App/Skeleton/Skeleton";
import "./style.css";

const TeamCardSkeleton = ({ children }) => {
  const skeletonSize = children ? "44px" : "66px";
  return (
    <li
      className={clsx("team-card__block", {
        "team-card__teams--page": !children,
      })}
    >
      <div className="team-card__img">
        <Skeleton width={skeletonSize} height={skeletonSize} radius="50%" />
      </div>
      <div className="team-card__info--skeleton">
        <Skeleton width="126px" height="22px" radius="8px" />
        <Skeleton width="126px" height="14px" radius="8px" />
      </div>
    </li>
  );
};

const FeaturedTeamSkeleton = ({ children }) => {
  return (
    <div className="featured-teams__block">
      {children && (
        <div className="featured-teams__introduction">
          <Skeleton width="141px" height="20px" radius="8px" />
          <Skeleton width="114px" height="40px" radius="8px" />
        </div>
      )}
      <ul className="team-card__list">
        {[...Array(6)].map((_, index) => (
          <TeamCardSkeleton key={index} children={children} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedTeamSkeleton;
