import React from 'react'

export default function Button(props) {
  // props.isAction = true;

  return (
    (<>
      <button disabled={ !props.isAction && true}>click me</button>
    </>)
  )
}