import React, { useState, useEffect, useRef } from 'react'
import Reddit from './Reddit'

function Form() {
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubrredit] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
    setSubrredit(inputValue);
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={e => setValue(e.target.value)}/>
      <Reddit subreddit={subreddit}/>
    </form>
  </>)
}

export default Form;