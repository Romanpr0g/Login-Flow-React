import React, { useState } from "react";
import BackButton from "../../../../atoms/App/BackButton/BackButton";
import DeleteButton from "../../../../atoms/App/DeleteButton/DeleteButton";
import ImgUploader from "../../../../atoms/App/ImgUploader/ImgUploader";
import { ReactComponent as Cross } from "../../../../../assets/svg/cross.svg";
import teamImg from "../../../../../assets/img/team2.png";
import axios from "axios";
import { Input } from "antd";
import "./style.scss";

type Team = {
  id: number;
  name: string;
  members: number;
};

type TeamDetailsHeaderProps = {
  team: Team;
};

const TeamDetailsHeader: React.FC<TeamDetailsHeaderProps> = ({ team }) => {
  const [name, setName] = useState(team.name);
  const [showCross, setShowCross] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setShowCross(e.target.value !== "");
  };

  const handleBlur = async () => {
    setShowCross(false);
    try {
      const response = await axios.patch("/api/teams", { id: team.id, name });
    } catch (error) {
      console.error("Error updating team name:", error);
    }
  };

  const handleFocus = () => {
    setShowCross(name !== "");
  };

  const handleCrossMouseDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName("");
    setShowCross(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/teams/:${team.id}`);
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  return (
    <div className="team-details__header">
      <div className="team-details__header--return">
        <BackButton to="/teams" name="Teams" />
      </div>
      <div className="team-details__team-info">
        <div className="team-info__block">
          <ImgUploader defaultUrl={teamImg} />
          <Input
            className="team-info__title"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {showCross && (
            <Cross
              className="input--cross"
              onMouseDown={handleCrossMouseDown}
            />
          )}
        </div>
        <DeleteButton
          name="Team"
          width={113}
          height={40}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TeamDetailsHeader;
