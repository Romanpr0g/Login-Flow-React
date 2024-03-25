import React from "react";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import { ReactComponent as PlussIcon } from "../../../../assets/svg/plus.svg";
import "./style.css";

type EmptyProps = {
  name: string;
  className?: string;
  buttonWidth: number;
  buttonHeight: number;
};
 
const Empty: React.FC<EmptyProps> = ({ name, className, buttonWidth, buttonHeight }) => {
  return (
    <div className={className}>
      <h3 className="empty--title">
        {"No" + " " + name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <p className="empty--info">
        {`You don't have any ${name} yet.`}
        <br /> Let's fix it!
      </p>
      <CreateButton name="Team" width={buttonWidth} height={buttonHeight} icon={<PlussIcon />} />
    </div>
  );
};

export default Empty;
