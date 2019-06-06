import React, { useContext } from 'react';

import scoreboardContext from './scoreboradContext';

function Scoreboard () {
  const scoreboard = useContext(scoreboardContext);

  return (<div>Score: { scoreboard.score }</div>)
}

export default Scoreboard;