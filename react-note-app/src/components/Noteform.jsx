import React from 'react'
import { useForm } from 'react-hook-form'

const Noteform = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log("SUBMITTING:", data);
    reset();                 
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='container' style={{ maxWidth: '500px', marginTop: '20px' }}>
        
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
          aria-label='select'
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

export default Noteform;