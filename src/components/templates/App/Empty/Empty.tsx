import React from "react";
import CreateButton from "../../../atoms/App/CreateButton/CreateButton";
import { ReactComponent as PlussIcon } from "../../../../assets/svg/plus.svg";
import "./style.css";

type EmptyProps = {
  title: string;
  text: string;
  buttonText: string;
  buttonWidth: number;
  buttonHeight: number;
  icon?: boolean;
  className?: string;
};

const Empty: React.FC<EmptyProps> = ({
  title,
  text,
  buttonText,
  buttonWidth,
  buttonHeight,
  icon,
  className,
}) => {
  return (
    <div className={className}>
      <h3 className="empty--title">No {title}</h3>
      <p className="empty--info">
        You don't have any {text} yet. Let's fix it!
      </p>
      <CreateButton
        name={buttonText}
        width={buttonWidth}
        height={buttonHeight}
        icon={icon}
      />
    </div>
  );
};

export default Empty;
