import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'
import NoteItem from './NoteItem'



const Notes = ({notes}) => {
  
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }
        }))
  }
  console.log("filll");
  console.log(filteredNotes);
  useEffect(handleSearch, [text])

  return (
    <div className="container-outer">
        <header className="header">
            {!showSearch && <h1>Notes</h1>} 
            {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value);
            handleSearch();}} autoFocus placeholder='Keyword...'/>}
            <button className="searchButton" onClick={() => setShowSearch(prevState => !prevState)}>
            {showSearch ? <GrClose/> : <BiSearchAlt/>} </button> 
        </header>
        <div className="container-body">
            {filteredNotes.length == 0 && <p className="para-empty">No notes found.</p>}
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note}/>) 
            }
            <Link to="/create-note" className="searchButton"><BsPlusLg/></Link>
        </div>
        
    </div>
  )
}

export default Notes