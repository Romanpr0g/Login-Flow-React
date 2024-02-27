import React from "react";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import "./style.css";
const Empty = ({ name }) => {
  return (
    <div className="empty--block">
      <h3 className="empty--title">
        {"No" + " " + name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <p className="empty--info">
        {`You don't have any ${name} yet.`}
        <br /> Let's fix it!
      </p>
      <CreateButton name="Team" width={114} height={40} />
    </div>
  );
};

export default Empty;
