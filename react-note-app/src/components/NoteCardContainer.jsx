import React from 'react'
import Notecard from './NoteCard'
import "./NoteCardContainer.css"
const NoteCardContainer = ({ notes , searchtext }) => {
  return (
    <div className='note-container'>
      <div className='row'>
        {notes.map(note => (
          <Notecard key={note.id} notes={note} />
        ))}
      </div>
    </div>
  )
}

export default NoteCardContainer


