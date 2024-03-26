import React, { useState, useEffect, useLayoutEffect, createRef } from "react";
import Empty from "../Empty/Empty";
import { Spin } from "antd";
import EventCard from "../../../organisms/App/EventCard/EventCard";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import UpcomingEventsSkeleton from "../../../organisms/App/Skeleton/UpcomingEventsSkeleton/UpcomingEventsSkeleton";
import "./style.css";

const UpcomingEvents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [maxHeight, setMaxHeight] = useState(null);
  const divRef = createRef();
  const ulRef = createRef();

  useEffect(() => {
    fetch("/api/events", {
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
        const children = ulRef.current.children;
        const maxHeight = divRef.current.offsetHeight - 64;
        const { totalHeight } = Array.from(children).reduce(
          (acc, child) => {
            const childHeight = child.offsetHeight;
            if (acc.totalHeight + childHeight <= maxHeight) {
              return {
                totalHeight: acc.totalHeight + childHeight + 16,
              };
            } else {
              return acc;
            }
          },
          { totalHeight: 0 }
        );
        setMaxHeight(totalHeight - 16);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ulRef, divRef]);

  return (
    <div className="upcoming-events__content">
      {loading ? (
        <UpcomingEventsSkeleton />
      ) : data?.events && Object.keys(data.events).length > 0 ? (
        <div className="upcoming-events__block" ref={divRef}>
          <div className="upcoming-events__introduction">
            <h3 className="upcoming-events__introduction--title">
              Upcoming Events
            </h3>
            <CreateButton name="Create Event" width={116} height={40} />
          </div>
          <ul
            className="upcoming-events__list"
            ref={ulRef}
            style={{ maxHeight: maxHeight }}
          >
            {data.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </ul>
        </div>
      ) : (
        <Empty title="Events" text="events" buttonText="Create Team" buttonWidth={114} buttonHeight={40} />
      )}
    </div>
  );
};

export default UpcomingEvents;
