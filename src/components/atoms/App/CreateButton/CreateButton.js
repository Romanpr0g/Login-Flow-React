import React from 'react';
import "./style.css"
const CreateButton = ({name, width, height}) => {
  return ( 
    <button className='create-button' style={{width: width, height: height}}>{"Create" + " " + name}</button>
   );
}
 
export default CreateButton;