import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/note_list/', data)
      console.log('success', response.data); 
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container'>
      <h1 className='mb-4'>Add Note</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <input
          type="text"
          placeholder='Title...'
          {...register("title", { required: true })}
          className='form-control mt-3'
        />

        <textarea
          placeholder='Content...'
          {...register('content', { required: true })}
          className='form-control'
          style={{ maxHeight: '100px', overflow: 'auto' }}
        />

        <select
          className='form-select'
          {...register('catigory', { required: true })} 
        >
          <option value="">Select Category</option>
          <option value="Business">Business</option>    
          <option value="Personal">Personal</option>
          <option value="Important">Important</option>
        </select>

        <button type="submit" className='btn btn-success mb-3'>Submit</button>
      </form>
    </div>
  )
}

export default AddPage