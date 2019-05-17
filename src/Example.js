import React, { useEffect, useLayoutEffect } from 'react'

function Example () {


  useEffect(() => {
    console.log('use effect lifecycle: component did mount');
  }, [])

  useLayoutEffect(() => {
    console.log('use layout effect lifecycle: component did mount');
  }, [])

  console.log('render lifecycle');

  return (
    <>
      <div>
        <label>Your name</label>
        <input type="text" autoComplete="off"/>
      </div>
    </>
  )
}

export default Example;