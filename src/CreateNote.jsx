import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    
  const [input,setinput] =useState ({
    tittle:" ",
    content: " ",
});

const inpEvent = (event) =>{
  const {name , value} = event.target;

  setinput((prevalue)=>{
    return {
      ...prevalue,
      [name]:value ,
    };
  });
};
  
  return (
    <div className="main_note">
      <form>

        <input 
        type="text"
        placeholder="Title"
        name="tittle"
        value={input.tittle}
        onChange={inpEvent}
         />
        <textarea
         rows="" 
         colom=" "
        placeholder="Write a note..."
        name="content"
        value={input.content}
        onChange={inpEvent}
          
           />
        <div className="button-container">
          <Button className="ic">
            <AddIcon className="addIcon"/>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
