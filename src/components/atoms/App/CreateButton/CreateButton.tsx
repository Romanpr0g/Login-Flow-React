import React, { ReactNode } from 'react';
import "./style.css"

type CreateButtonProps = {
  name: string;
  width: number;
  height: number;
  icon?: ReactNode;
}

const CreateButton: React.FC<CreateButtonProps> = ({name, width, height, icon}) => {
  return ( 
    <button className='create-button' style={{width: width, height: height}}>
      {icon}
      Create {name}
      </button>
   );
}
 
export default CreateButton;