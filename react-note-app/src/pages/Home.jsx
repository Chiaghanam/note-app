import React, { useEffect, useState } from 'react'
import NoteCardContainer from '../components/NoteCardContainer'
import api from '../api'

const Home = ({ searchtext }) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    api.get('/note_list/')  
      .then(response => {
        console.log(response.data);
        setNotes(Array.isArray(response.data) ? response.data : [])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [])

  useEffect(() => {
    if (!searchtext || searchtext.length < 2) return;  
    api.get(`/search/?search=${searchtext}`)  
      .then(res => {
        console.log(res.data)
        setNotes(Array.isArray(res.data) ? res.data : []) 
      })
      .catch(error => {
        console.error('Search error:', error);
      })
  }, [searchtext])

  return (
    <div>
      <NoteCardContainer notes={notes} searchtext={searchtext} />
    </div>
  )
}

export default Home