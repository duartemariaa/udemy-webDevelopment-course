import React, { useState } from 'react'
import './App.css'
import ToDoItem from './toDoItem';
import InputArea from './InputArea';

function App() {
  const [itemsList, setItemsList] = useState([]);

  function handleClick(inputText){
    setItemsList(prevItems => {
        return [...prevItems, inputText];
    })
  }

  function deleteItem(id){
    setItemsList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <div>
        <InputArea onAdd={handleClick}/>
        </div>
        <div>
          <ul>
            {itemsList.map((item, index) => 
              <ToDoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
