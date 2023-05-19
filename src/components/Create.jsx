import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

const Create = ({setNotes}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("added");
    console.log(title);
    if(title && details) {
      const note = {id: uuid(), title, details} 
      setNotes(prevNotes => [note, ...prevNotes])
      navigate('/')
    }
  }

  return (
    <div className="container-outer">
        <header className="header">
            <Link to="/" className="searchButton"><IoIosArrowBack/></Link>
            <button className="searchButton" onClick={handleSubmit}>Save</button>
        </header>
        <form className="form" onSubmit={handleSubmit}>  
            <input type="text" className="title-input" placeholder="Title" value={title} onChange={(e) => 
            setTitle(e.target.value)} autoFocus/>
            <textarea className="text-input" rows="28" placeholder="Write..." value={details} onChange={(e) => setDetails(e.
              target.value)}></textarea>
        </form>
    </div>
  )
}

export default Create


