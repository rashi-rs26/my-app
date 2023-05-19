 import React, { useEffect } from 'react'
 import Create from './components/Create'
 import Edit from './components/Edit'
 import Notes from './components/Notes'
 import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
 const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]) 

    return (
      <main id="app">
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Notes notes={notes}/>} />
                  <Route path="/create-note" element={<Create setNotes=
                  {setNotes}/>} />
                  <Route path="/edit-note/:id" element={<Edit notes={notes} setNotes={setNotes}/>} />
              </Routes>
          </BrowserRouter>
      </main>
    )
 }
 
 export default App