import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './App.css'

function Example () {
  const inputRef = useRef();
  const inputGroupRef = useRef();
  
  useLayoutEffect(() => {
    console.log('useLayoutEffect trigger');
  }, []);

  useEffect(() => {
    console.log('useEffect trigger');
  }, [])

  return (
    <>
      <div className="container">
        <div ref={inputGroupRef} className="inputGroup">
          <label className="label">Your name</label>
          <input className="input" type="text" autoComplete="off" ref={inputRef}/>
        </div>
      </div>
    </>
  )
}

export default Example;