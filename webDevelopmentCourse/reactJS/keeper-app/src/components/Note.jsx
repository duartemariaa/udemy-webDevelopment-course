import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props){
    return <div className="note-container">
        <h1 className="note-title">{props.title}</h1>
        <p className="note-text">{props.content}</p>
        <button className="note-btn" onClick={() => props.delete(props.id)}><DeleteIcon/></button>
    </div>
}

export default Note