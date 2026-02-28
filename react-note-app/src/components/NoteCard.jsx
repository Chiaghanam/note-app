import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import "./NoteCard.css"

const NoteCard = ({ notes }) => {
    const content = notes.content.split(" ").slice(0, 20).join(" ") + "...";

    const modifiedDate = dayjs(notes.modified);
  return (
    <div className='container  col-12 col-sm-6 col-md-4 '>
        <div className="card" style={{ margin: '10px auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <div className='card-icon container' style={{width: '100%'}} >
                <FaNoteSticky style={{position: 'absolute', right: '10px', margin: '10px', color: 'blue'}} />
            </div>
            <div className='design' style={{backgroundColor: 'blue', width:'3px', height:'2.5rem', position:'absolute', left: 0, top:' 1rem' }}>
            {/* the design snipet at the left side of the card */}
            </div>
            <Link to={`/note/${notes.id}`} className='card-header' style={{backgroundColor: 'white',textDecoration: 'none', border: 'none'}}>
                <strong>
                    {notes.title}
                </strong>

            </Link>
            <div className='card-subtitle' style={{margin: '5px 0 2px 1rem'}}>
                <sub>
                   {modifiedDate.format('MMM D, YYYY h:mm A')}  
                </sub>
            
            </div>
            <div className='card-body'>
            {content}
          </div>
            <div className='card-footer' style={{backgroundColor: 'white', border: 'none'}}>
                <div ><FaEnvelope style={{color: 'blue'}} /> {notes.catigory}</div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard
