import React from 'react';
import FancyButton from './FancyButton';

class App extends React.Component {
  ref = React.createRef();

  handleClick() {
    const { current } = this.ref;
    console.log('current', current);
  }

  render() {
    return (<FancyButton label="Click Me" handleClick={this.handleClick.bind(this)} ref={this.ref}/>)
  }
}



export default App;