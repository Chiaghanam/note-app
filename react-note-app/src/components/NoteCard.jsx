import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import "./NoteCard.css";

const NoteCard = ({ notes }) => {
  const contentPreview = notes.content
    ? notes.content.split(" ").slice(0, 20).join(" ") + "..."
    : "";

  const modifiedDate = dayjs(notes.modified);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-100 shadow-sm position-relative">
        
        
        <FaNoteSticky 
          className="position-absolute" 
          style={{ right: '10px', top: '10px', color: 'blue' }} 
        />

        
        <div 
          className="position-absolute" 
          style={{ backgroundColor: 'blue', width: '3px', height: '2.5rem', left: 0, top: '1rem' }} 
        />

        
        <Link 
          to={`/note/${notes.id}`} 
          className="card-header bg-white border-0 text-decoration-none fw-bold"
        >
          {notes.title}
        </Link>

        
        <div className="card-subtitle text-muted ms-3 mt-1">
          <small>{modifiedDate.format('MMM D, YYYY h:mm A')}</small>
        </div>

       
        <div className="card-body">
          <p className="text-truncate">{contentPreview}</p>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-0">
          <FaEnvelope style={{ color: 'blue' }} /> {notes.catigory}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;