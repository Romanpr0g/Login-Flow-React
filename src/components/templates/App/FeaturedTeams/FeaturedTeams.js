import React, { useEffect, useState, createRef, useLayoutEffect } from "react";
import Empty from "../Empty/Empty";
import TeamCard from "../../../organisms/App/TeamCard/TeamCard";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import FeaturedTeamSkeleton from "../../../organisms/App/Skeleton/FeaturedTeamsSkeleton/FeaturedTeamSkeleton";
import "./style.css";

const FeaturedTeams = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [maxHeight, setMaxHeight] = useState(null);
  const divRef = createRef();
  const ulRef = createRef();
  useEffect(() => {
    fetch("/api/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data);
        } else {
          console.error("Incorrect data from the server:", data);
        }
      })
      .catch((error) => {
        console.error("The request failed", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ulRef.current) {
        const listItemHeight = ulRef.current.children[0].offsetHeight;
        const itemCount = Math.floor(
          (divRef.current.offsetHeight - 64) / (listItemHeight + 8)
        );
        setMaxHeight(itemCount * (listItemHeight + 8) - 8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ulRef, divRef]);

  return (
    <div className="featured-teams__content">
      {loading ? (
        <FeaturedTeamSkeleton />
      ) : data?.teams && Object.keys(data.teams).length > 0 ? (
        <div className="featured-teams__block" ref={divRef}>
          <div className="featured-teams__introduction">
            <h3 className="featured-teams__introduction--title">
              Featured teams
            </h3>
            <CreateButton name="Team" width={114} height={40} />
          </div>
          <ul
            className="team-card__list"
            ref={ulRef}
            style={{ overflow: "hidden", maxHeight: maxHeight }}
          >
            {data.teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </ul>
        </div>
      ) : (
        <Empty name="teams" />
      )}
    </div>
  );
};

export default FeaturedTeams;
