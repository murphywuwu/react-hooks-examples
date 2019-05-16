import React, { useState, useEffect, useRef } from 'react'

function Form() {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  useEffect(() => {
    // this runs after the first render
    // so the ref is set by now
    console.log('render')

    // The effect 'depend on' inputRef
    // the value return by useRef will be stable between renders - it won't change
    // so evev though we're passing inputRef as the 2nd argument of useEffect, it will effectively only run once, on initial mount
  }, [inputRef])

  return (
    <input type="text" ref={inputRef} value={value} onChange={e => setValue(e.target.value)}/>
  )
}

export default Form;