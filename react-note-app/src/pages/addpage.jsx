import React from 'react';
import api from '../api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/note_list/', data);
      console.log('success', response.data);
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-4 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="mb-4 mt-5  text-center">Add Note</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-3">
              <input
                type="text"
                placeholder="Title..."
                {...register("title", { required: true })}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Content..."
                {...register("content", { required: true })}
                className="form-control"
                rows={4}
              />
            </div>

            <div className="mb-3">
              <select
                className="form-select"
                {...register("catigory", { required: true })}
              >
                <option value="">Select Category</option>
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
                <option value="Important">Important</option>
              </select>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPage;