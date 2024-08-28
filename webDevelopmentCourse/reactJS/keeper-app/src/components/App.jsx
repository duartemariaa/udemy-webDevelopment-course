import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from '../script.js';
import InputArea from './InputArea.jsx';

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleClick(note){
    setNoteList(prevNotes => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNoteList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header/>
      <main>
        <InputArea onAdd={handleClick}/>
        <div className="container">
          {noteList.map((note, index) => (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                delete={deleteNote}
              />
            ))
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
