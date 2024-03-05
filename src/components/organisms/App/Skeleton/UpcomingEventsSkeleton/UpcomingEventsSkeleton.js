import React from "react";
import Skeleton from "../../../../atoms/App/Skeleton/Skeleton";

const TeamItemSkeleton = () => (
  <div className="event-card__team--item">
    <Skeleton width="52px" height="52px" radius="50%" />
    <Skeleton width="32px" height="22px" radius="8px" />
  </div>
);

const EventCardSkeleton = () => {
  return (
    <li className="event-card__block">
      <div className="event-card__date--block">
        <Skeleton width="24px" height="24px" radius="50%" />
        <div className="event-card__date--info">
          <Skeleton
            width="72px"
            height="16px"
            radius="8px"
            marginBottom="4px"
          />
          <Skeleton
            width="72px"
            height="16px"
            radius="8px"
            marginBottom="12px"
          />
          <Skeleton width="72px" height="16px" radius="8px" />
        </div>
        <Skeleton width="54px" height="22px" radius="8px" />
      </div>
      <div className="upcoming-events__general-info--block">
        <div className="event-card__tournament--block">
          <div className="event-card__team--block">
            <TeamItemSkeleton />
            <Skeleton
              width="13px"
              height="18px"
              radius="8px"
              className="event-card__team--versus"
            />
            <TeamItemSkeleton />
          </div>
          <div className="event-card__trophy--block">
            <Skeleton width="64px" height="16px" radius="8px" />
            <Skeleton width="110px" height="16px" radius="8px" />
          </div>
        </div>
        <div className="event-card__location--block">
          <Skeleton width="110px" height="22px" radius="8px" />
          <div className="event-card__location--adress-block">
            <p className="event-card__location--address">
              <Skeleton
                width="100px"
                height="20px"
                radius="8px"
                marginBottom="4px"
              />
            </p>
            <p className="event-card__location--address">
              <Skeleton width="172px" height="20px" radius="8px" />
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

const UpcomingEventsSkeleton = () => {
  return (
    <div className="upcoming-events__block">
      <div className="upcoming-events__introduction">
        <Skeleton width="157px" height="20px" radius="8px" />
        <Skeleton width="114px" height="40px" radius="8px" />
      </div>
      <ul className="upcoming-events__list">
        {[...Array(3)].map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEventsSkeleton;
