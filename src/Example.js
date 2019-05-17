import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './App.css'

function Example () {
  const inputRef = useRef();
  const inputGroupRef = useRef();
  

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => inputGroupRef.current.classList.add('active');
    const handleBlur = () => inputGroupRef.current.classList.remove('active');

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventLitener('focus', handleFocus);
      current.removeEventLitener('blur', handleBlur);
    }
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