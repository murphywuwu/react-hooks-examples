import React, { useReducer} from 'react'

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  console.log('rendering');
  return (
     <>
       <button onClick={forceUpdate}>Click to Render</button>
     </>
    )
}

export default App;