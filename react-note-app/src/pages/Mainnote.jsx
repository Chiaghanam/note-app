import React from 'react'
import './Mainnote.css'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import api from '../api'
import { Link, Navigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
const Mainnote = () => {
  const [openmodal, setopenmodal]= useState(false)

  const [note, setNote] = useState({});
  const {id} = useParams();
  const numericId = parseInt(id, 10);
  const Navigate = useNavigate();
  
  const handlemodal = () => {
    setopenmodal(!openmodal);
  }
  useEffect(() => {
if (id){console.log(id);} 

    api.get(`/note_edit/${numericId}`)
      .then(response => {
        console.log(response.data);
        setNote(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },[numericId]);
 
  const handledelete = () =>{
    api.delete(`/note_edit/${numericId}/`)
    .then(() => {
      console.log("note deleted successfully");
      Navigate("/");
    })
    .catch(err => console.error(err))
  }
  

  return (
    <div  style={{width: '99vw'}}>
      <Navbar />
      <div className="container bg-color-tertiary Mainnote-container" >
        <h1><strong>{note.title}</strong></h1>
        <div className=' Mainnote-date'>
            <div><sub> Created: {dayjs(note.created).format('MMM D, YYYY h:mm A')} </sub></div>
            <div><sub> Last Updated: {dayjs(note.modified).format('MMM D, YYYY h:mm A')} </sub></div>
        </div>
        <div className='mt-4 d-flex justify-content-center align-items-center gap-3' >
            <Link to={`/edit/${numericId}`}><button type="button" className='btn btn-primary'>Edit</button></Link>
            <button type="button" className='btn btn-danger' onClick={handlemodal}>Delete</button>
        </div>
        <div className='mt-4'>
            <p>
              {note.content}
            </p>
        </div>
        </div>
      {openmodal && <Modal handlemodal={handlemodal} handledelete={handledelete} />}
    </div>
  )
}

export default Mainnote
