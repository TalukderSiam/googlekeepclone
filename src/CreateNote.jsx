import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
  return(
    <>
    <div className="main_note">
    <form>
        <input type="text" placeholder="Tittle"/>
        <textarea rows="" colom=" "  placeholder="write a note....."/>
        <Button className="Btn">
         <AddIcon className="ic"/>
        </Button>

    </form>
    </div>
    </>
  )
}
export default CreateNote;