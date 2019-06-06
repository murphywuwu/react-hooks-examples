import React, { useState } from 'react'
import Scoreboard from './Scoreboard';
import PointButton from './PointButton';

import scoreBoardContext from './scoreboradContext';
import scoreboradContext from './scoreboradContext';

function App () {
  const [score, setScore] = useState(0);
  console.log('score', score)
  return (
      <scoreboradContext.Provider
        value={{ score, addPoints: points => setScore(score => score + points) }}
      >
       <div style={{ textAligh: 'center' }}>
         <Scoreboard/>
         <hr/>
         <PointButton points={1}/>
         <PointButton points={3}/>
         <hr/>
       </div> 
      </scoreboradContext.Provider>
  )
}

export default App;