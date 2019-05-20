import React from 'react';
import FancyButton from './FancyButton';
import FancyInput from './FancyInput';

class App extends React.Component {
  ref = React.createRef();

  handleClick() {
    const { current } = this.ref;
    current.focus();
    console.log('current', current);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <FancyInput ref={this.ref}/>
      </>
    )
  }
}



export default App;