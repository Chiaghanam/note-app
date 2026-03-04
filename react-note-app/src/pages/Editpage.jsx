import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const Editpage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      content: '',
      catigory: ''
    }
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/note_edit/${id}/`);
        reset({
          title: response.data.title,
          content: response.data.content,
          category: response.data.category
        });
      } catch (error) {
        console.error("Error fetching note", error);
        setError('Failed to fetch note data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await api.put(`/note_edit/${id}/`, data);
      console.log('success', response.data);
      alert("Note updated successfully");
      reset();
      navigate(`/note/${id}`);
    } catch (error) {
      console.error("Error updating note", error);
      setError("Failed to update note");
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading note...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5 text-center">Error: {error}</div>;
  }

  return (
    <div className="container my-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="mb-4 text-center mt-5">Edit Note</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 bg-light rounded shadow-sm d-flex flex-column gap-3"
          >
            <input
              type="text"
              placeholder="Title..."
              {...register('title')}
              className="form-control"
            />

            <textarea
              placeholder="Content..."
              {...register('content')}
              className="form-control"
              rows={4}
            ></textarea>

            <select
              className="form-select"
              {...register('catigory', { required: true })} 
            >
              <option value="">Select Category</option>
              <option value="Business">Business</option>
              <option value="Personal">Personal</option>
              <option value="Important">Important</option>
            </select>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Update Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editpage;