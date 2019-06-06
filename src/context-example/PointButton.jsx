import React, { useContext } from 'react';

import scoreboardContext from './scoreboradContext';

function PointButton({ points }) {
  const scoreborad = useContext(scoreboardContext);

  function updateScore() {
    scoreborad.addPoints(points);
  }

  return (<button onClick={updateScore}>Add{points}</button>)
}

export default PointButton;