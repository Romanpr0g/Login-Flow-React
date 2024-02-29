import React from "react";
import { ReactComponent as Ball } from "../../../../assets/svg/ball.svg";
import { ReactComponent as Clock } from "../../../../assets/svg/clock.svg";
import { ReactComponent as Calendar } from "../../../../assets/svg/calendar.svg";
import { ReactComponent as Trophy } from "../../../../assets/svg/trophy.svg";
import { ReactComponent as Details } from "../../../../assets/svg/details.svg";
import team1 from "./../../../../assets/img/team1.png";
import team2 from "./../../../../assets/img/team2.png";

import "./style.css";

const TeamItem = ({ teamImage, teamName }) => (
  <div className="event-card__team--item">
    <img src={teamImage} className="event-card__team--icon" alt={teamName} />
    <span className="event-card__team--name">{teamName}</span>
  </div>
);

const EventCard = ({ event }) => {
  const eventComponents = {
    game: <Ball className="event-card__event--icon" />,
    practice: <Clock className="event-card__event--icon" />,
    social: <Calendar className="event-card__event--icon" />,
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const eventDate = new Date(event.date);
  const dayOfWeek = daysOfWeek[eventDate.getDay()];
  const dayAndMonth = event.date.split(" ").slice(0, 2).reverse().join(" ");
  // const location = event.location

  return (
    <li key={event.id} className="event-card__block">
      <div className="event-card__date--block">
        {eventComponents[event.event]}
        <div className="event-card__date--info">
          <div className="event-card__date--week-day">{dayOfWeek}</div>
          <div className="event-card__date--day">{dayAndMonth}</div>
          <div className="event-card__date--time">{event.time}</div>
        </div>
        {(event.event == "game" || event.event == "practice") && (
          <div className="event-card__event--type">{event.event}</div>
        )}
      </div>
      <div className="upcoming-events__general-info--block">
        <div className="event-card__tournament--block">
          <div className="event-card__team--block">
            {event.event !== "social" && (
              <>
                <TeamItem teamImage={team1} teamName={event.teamFirst} />
                {event.event == "game" && (
                  <>
                    <span className="event-card__team--versus">vs</span>
                    <TeamItem teamImage={team2} teamName={event.teamSecond} />
                  </>
                )}
              </>
            )}
          </div>
          <div className="event-card__trophy--block">
            {event.event == "social" ? (
              <span className="event-card__trophy--tournament social-tornament">
                {event.tournament}
              </span>
            ) : (
              <>
                <Trophy className="event-card__trophy--icon" />
                <span className="event-card__trophy--name">FR Club</span>
                <span className="event-card__trophy--tournament">
                  {event.tournament}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="event-card__location--block">
          <span className="event-card__location--stadium">{event.stadium}</span>
          <div>
            <p className="event-card__location--address">
              {event.location.split(" ").slice(0, 2).join(" ")}
            </p>
            <p className="event-card__location--address">
              {event.location.split(" ").slice(2).join(" ")}
            </p>
          </div>
        </div>
      </div>
      <Details className="event-card__details--icon" />
    </li>
  );
};

export default EventCard;
