import React, { useReducer} from 'react'
import Example from '../context-example/index';

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  console.log('rendering');
  return (
     <>
       <Example/>
       <button onClick={forceUpdate}>Click to Render</button>
     </>
    )
}

export default App;