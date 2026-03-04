import React, { useState, useEffect } from 'react';
import './Mainnote.css';
import Navbar from '../components/Navbar';
import api from '../api';
import { Link, useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Modal from '../components/Modal';

const Mainnote = () => {
  const [openModal, setOpenModal] = useState(false);
  const [note, setNote] = useState({});
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const navigate = useNavigate();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (id) {
      api.get(`/note_edit/${numericId}/`)
        .then(response => {
          setNote(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [numericId, id]);

  const handleDelete = () => {
    api.delete(`/note_edit/${numericId}/`)
      .then(() => {
        console.log("Note deleted successfully");
        navigate("/");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="w-100 ">
      <Navbar />
      <br />
      <div className='mt-5'></div>
      <br />
      <div className="container my-4 mt-5 p-4 bg-light rounded shadow-sm Mainnote-container">
        <h1 className="text-center mb-3"><strong>{note.title}</strong></h1>

        <div className="Mainnote-date text-muted mb-3">
          {note.created && (
            <div><small>Created: {dayjs(note.created).format('MMM D, YYYY h:mm A')}</small></div>
          )}
          {note.modified && (
            <div><small>Last Updated: {dayjs(note.modified).format('MMM D, YYYY h:mm A')}</small></div>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          <Link to={`/edit/${numericId}`}>
            <button type="button" className="btn btn-primary">Edit</button>
          </Link>
          <button type="button" className="btn btn-danger" onClick={handleModal}>Delete</button>
        </div>

        <div className="mt-3">
          <p className="lead">{note.content}</p>
        </div>
      </div>

      {openModal && (
        <Modal handlemodal={handleModal} handledelete={handleDelete} />
      )}
    </div>
  );
};

export default Mainnote;