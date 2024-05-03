import React, { ReactNode } from "react";
import { ReactComponent as PlussIcon } from "../../../../assets/svg/plus.svg";
import "./style.css";

type CreateButtonProps = {
  name: string;
  width: number;
  height: number;
  icon?: ReactNode;
};

const CreateButton: React.FC<CreateButtonProps> = ({
  name,
  width,
  height,
  icon,
}) => {
  return (
    <button className="create-button" style={{ width: width, height: height }}>
      {icon && <PlussIcon className="create-button__icon" />}
      {name}
    </button>
  );
};

export default CreateButton;
