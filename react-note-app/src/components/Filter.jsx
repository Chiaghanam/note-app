import React from 'react'
import { useState } from 'react'
import NoteCardContainer from './NoteCardContainer';
const Filter = () => {
  const [filtertext, setfiltertext] = useState("");

  return (
    <div className='container' style={{width: '300px', margin: '6rem auto 20px auto'}}>
      <select name="filter" className='form-select' aria-label='select' onChange={(e) => setfiltertext(e.target.value)} >
        <option value="">All Notes</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
     
    </div>
  )
}

export default Filter
