import React, { useState, useEffect } from "react";
import Empty from "../Empty/Empty";
import { Spin } from "antd";
import axios from "axios";
import TeamDetailsHeader from "../../../molecules/App/Homepage/TeamDetailsHeader/TeamDetailsHeader";
import TeamRoster from "../TeamRoster/TeamRoster";
import { useLocation } from "react-router-dom";
import type { Members } from "../../../../types/api";
import "./style.scss";

const TeamDetails: React.FC = () => {
  const { state } = useLocation();
  const [members, setMembers] = useState<Members[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("/api/teams/members");
        setMembers(response.data.members);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <>
      <TeamDetailsHeader team={state.team} />
      <div className="team-details__block">
        {loading ? (
          <Spin />
        ) : members?.length > 0 ? (
          <TeamRoster team={state.team} members={members} />
        ) : (
          <div className="team-details__empty">
            <Empty
              title="Members"
              text="team's members"
              buttonText="Add Member"
              buttonWidth={155}
              buttonHeight={48}
              icon
              className="empty--centered"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TeamDetails;
