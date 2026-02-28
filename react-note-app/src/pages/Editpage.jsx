import React, { useEffect, useState } from 'react'
// import Noteform from '../components/Noteform'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Editpage =  () => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  // const [title, settitle] = useState('')
  // const [content, setcontent] = useState('')
  // const [category, setcategory] = useState('')
  
const { register, handleSubmit, reset } = useForm({
  defaultValues: {
    title: '',
    content: '',
    category: ''
  }
});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect ( ()  => {
    const fetchData = () => {
      try{
        const response = axios.get(`http://127.0.0.1:8000/note_edit/${id}/`)
          .then(response => {
          console.log("gotten responce")
          console.log(response.data)
          reset({
            title: response.data.title,
            content: response.data.content,
            category: response.data.category
          });
          })
      } catch (error) {
        console.error("error fetching note", error);
        seterror('Failed to fetch note data');
      }finally{
        setloading(false);
      }
    };
    
      fetchData();
    
    
  }, [id])
  const onsubmit = async (data) => {

    try{
       const response = await axios.put(`http://127.0.0.1:8000/note_edit/${id}/`, data);
        console.log('success' , response.data);
        alert("note updated successfully");
      } catch (error) {
         console.error("error updating note", error);
         seterror("failed to update note");
      }
     
      reset();
      navigate(`/note/${id}`);
    }

    if (loading){
      return <div> Loading note...</div>
    }
    if (error){
      return <div> Error: {error}
      </div>
    }
  return (
    <div className='container'>
        
        <div className='d-flex justify-content-center align-items-center' style={{width: '99vw'}}>
            <div>
                <h1 className='mb-4'>Edit Note</h1>
                  <form  onSubmit={handleSubmit(onsubmit)} className='container' style={{backgroundColor: '#bfbbbbff', opacity: '0.8', borderRadius: '8px', width: '50vw', justifySelf: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                   <input type="text" placeholder='Title...' name="title" id=""  {...register('title')} className='form-control mt-3' />

                    <textarea name="content" placeholder='Content...' id=""  {...register('content')} className='form-control' style={{maxHeight: '100px', overflow: 'auto'}}></textarea>

                    <select className='form-select' {...register('catigory', { required: true })} >
                              <option value="">Select Category</option>
                              <option value="Business">Business</option>    
                              <option value="Personal">Personal</option>
                              <option value="Important">Important</option>
                    </select>

    
                    <button type="submit"  className='btn btn-success mb-3'> Update Note</button>
                  </form>
            </div>
            
        </div>
    
    </div>
  )
}

export default Editpage
