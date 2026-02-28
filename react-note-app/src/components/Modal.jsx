import React from 'react'
import "./Modal.css"

const Modal = ({handlemodal, handledelete}) => {


  const deletenote = () =>{
    handledelete()
   
  }
  return (
    <div>
        <div className="c-modal-overlay">
        <div className="c-modal">
            <div className="closebutton" onClick={handlemodal}>X</div>
            <div className="c-modal-content">
                <h2>Delete note</h2>
                <p>Are you sure you want to delete this note?</p>
                <div className="c-modal-actions d-flex justify-content-center gap-3">
                    <button className="btn btn-danger" onClick={deletenote}>Delete</button>
                    <button className="btn btn-secondary" onClick={handlemodal}>Cancel</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Modal
