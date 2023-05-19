import React from 'react'
import { Link } from 'react-router-dom'


const NoteItem = ({note}) => {
  return (
    <div className="eachNote">
    <Link to={`/edit-note/${note.id}`} className="noteLink">
        <h4>{note.title.length > 60 ? (note.title.substr(0,60)) + `...`: note.title}</h4> 
        <p>{note.details.length > 600 ? (note.details.substr(0,600)) + `...`: note.details}</p>
    </Link>
    </div>
  )
}

export default NoteItem