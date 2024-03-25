import React from "react";
import "./style.scss"

type DeleteButtonProps = {
  name: string;
  width: number;
  height: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({name, width, height}) => {
  return ( 
    <button className="delete-button" style={{width: width, height: height}}>{"Delete" + " " + name}</button> 
  );
}
 
export default DeleteButton;