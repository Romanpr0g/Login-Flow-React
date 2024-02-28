import React, { useState, useEffect } from "react";
import Empty from "../Empty/Empty";
import { Spin } from "antd";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import "./style.css";

const UpcomingEvents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="upcoming-events__content">
      {loading ? (
        <Spin size="large" delay={100} />
      ) : data?.events && Object.keys(data.events).length > 0 ? (
        <div className="upcoming-events__block">
          <div className="upcoming-events__introduction">
            <h3 className="upcoming-events__introduction--title">
              Upcoming Events
            </h3>
            <CreateButton name="Event" width={116} height={40} />
          </div>
          <ul className="upcoming-events__list"></ul>
        </div>
      ) : (
        <Empty name="events" />
      )}
    </div>
  );
};

export default UpcomingEvents;
