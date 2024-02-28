import React, { useEffect, useState, createRef } from "react";
import { Spin } from "antd";
import Empty from "../Empty/Empty";
import TeamCard from "../../../organisms/App/TeamCard/TeamCard";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
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
          console.error("Некорректные данные с сервера:", data);
        }
      })
      .catch((error) => {
        console.error("Ошибка запроса", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
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
        <Spin size="large" delay={100} />
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
