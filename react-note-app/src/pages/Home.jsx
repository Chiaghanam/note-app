import React from 'react'
// import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'
import { useEffect, useState } from 'react'
import api from '../api'

const Home = ({ searchtext }) => {

  const [notes, setNotes] = useState([])
  useEffect(() => {
        api.get('/note_list')
        .then(response => {
            console.log(response.data);
            setNotes(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    }, [])

    useEffect(()=>{
      // if({searchtext} < 2 ) return;
      api.get(`/search/?search=${searchtext}/`)
      .then(res =>{
        console.log(res.data)
       
      })

    },[searchtext])
  return (
    <div>
        {/* <Filter  /> */}
        <NoteCardContainer notes={notes} searchtext={searchtext} />
    </div>
  )
}

export default Home

