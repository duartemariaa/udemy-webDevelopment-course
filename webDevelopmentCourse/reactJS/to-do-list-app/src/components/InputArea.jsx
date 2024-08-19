import React, { useState} from "react";

function InputArea(props){
    const [inputText, setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return <>
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }}>Add</button>
    </>
}

export default InputArea;