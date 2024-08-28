import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function InputArea(props){
    const [note, setNote] = useState({title:"", content:""});

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    return <>
        <div className="input-container">
            <input onChange={handleChange} name="title" value={note.title} type="text" placeholder="Title"/>
            <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note"></textarea>
            <button onClick={() => {props.onAdd(note); setNote({title:"", content:""})}}><AddIcon/></button>
        </div>
    </>
}

export default InputArea;