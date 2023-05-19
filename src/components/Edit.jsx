import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'

const Edit = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const navigate = useNavigate();


  const handleForm = (e) => {
    e.preventDefault();
    if(title && details) {
      const newNote = {...note, title, details} 
      const newNotes = notes.map(item => {
        if(item.id == id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    navigate('/')
  }

  const handleDelete = () => {
    if(window.confirm('Do you want to delete?')) {
      const newNotes = notes.filter(item => item.id != id);
      setNotes(newNotes);
      navigate('/')
    }
  }

  return (
    <div className="container-outer">
        <header className="header">
            <Link to="/" className="searchButton"><IoIosArrowBack/>
            </Link>
            <button className="searchButton" onClick={(handleForm)}> 
                Save
            </button>
            <button className="searchButton" onClick={(handleDelete)}><RiDeleteBin6Line/></button>
        </header>
        <form className="form" onSubmit={(handleForm)}>
            <input className="title-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
            <textarea className="text-input" rows="28" placeholder="Write..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        </form>
    </div>
  )
}

export default Edit
