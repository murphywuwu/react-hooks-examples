import React, { useEffect, useState, useRef } from 'react'
import styles from './App.css'

// function Example () {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <h1>{count}</h1>
// }
function Example () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>
}

export default Example;