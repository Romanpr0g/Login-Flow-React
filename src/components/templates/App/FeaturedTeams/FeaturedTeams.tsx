import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  PropsWithChildren,
} from "react";
import Empty from "../Empty/Empty";
import TeamCard from "../../../organisms/App/TeamCard/TeamCard";
import FeaturedTeamSkeleton from "../../../organisms/App/Skeleton/FeaturedTeamsSkeleton/FeaturedTeamSkeleton";
import type { Team } from "../../../../types/api";
import "./style.css";

const FeaturedTeams: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<{ teams: Team[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    fetch("/api/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: { teams: Team[] }) => {
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

  const handleResize = useCallback(() => {
    if (ulRef.current && divRef.current) {
      const listItemHeight = (ulRef.current.children[0] as HTMLElement)
        .offsetHeight;
      const itemCount: number = Math.floor(
        (divRef.current.offsetHeight - (children ? 64 : 0)) / (listItemHeight + 8)
      );
      setMaxHeight(itemCount * (listItemHeight + 8) - 8);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (data?.teams?.length) {
      handleResize()
    }
  }, [data])

  return (
    <div className="featured-teams__content">
      {loading ? (
        <FeaturedTeamSkeleton children={children}/>
      ) : data?.teams && Object.keys(data.teams).length > 0 ? (
        <div className="featured-teams__block" ref={divRef}>
          {children}
          <ul
            className="team-card__list"
            ref={ulRef}
            style={{ maxHeight: maxHeight || 0 }}
          >
            {data.teams.map((team) => (
              <TeamCard key={team.id} team={team} children={children} />
            ))}
          </ul>
        </div>
      ) : (
        <Empty title="Teams" text="teams" buttonText="Create Team" buttonWidth={114} buttonHeight={40} />
      )}
    </div>
  );
};

export default FeaturedTeams;
