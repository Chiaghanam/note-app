import React from 'react'
// import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ({ searchtext }) => {

  const [notes, setNotes] = useState([])
  useEffect(() => {
        axios.get('http://127.0.0.1:8000/note_list')
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
      axios.get(`http://127.0.0.1:8000/search/?search=${searchtext}/`)
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

