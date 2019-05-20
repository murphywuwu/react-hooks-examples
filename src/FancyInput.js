import React, { useRef, useImperativeHandle } from 'react';

function FancyInput(props, ref) {
  const inputRef = useRef();
  // console.log(useImperativeHandle)
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('inputRef current', inputRef.current)
      inputRef.current.focus();
    }
  }))

  return (<input type="text" ref={inputRef}/>)
}

export default React.forwardRef(FancyInput);