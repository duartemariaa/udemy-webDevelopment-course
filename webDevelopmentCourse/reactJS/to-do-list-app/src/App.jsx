import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [itemsList, setItemsList] = useState([]);
  
  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick(){
    setItemsList(prevItems => {
      return [...prevItems, inputText];
    })
    setInputText("");
  }

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <div>
          <input onChange={handleChange} type="text" value={inputText}/>
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          <ul>
            {itemsList.map(item => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
