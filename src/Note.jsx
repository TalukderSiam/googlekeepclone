import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Note = () => {
  return(
    <>
    <div className="note">
      <h1>Title</h1>
      <p>This is the content</p>
      <Button>
      
      <AddIcon className="ic"/>
        
        </Button>
    </div>
    
    </>
  )
}
export default Note;