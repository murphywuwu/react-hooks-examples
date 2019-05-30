import React, { useEffect, useState, Component } from 'react'
import styles from './App.css'

// function Example () {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(`You clicked ${count} times`);
//     }, 3000)
//   })

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

class Example extends Component {
  state = {
    count: 0
  }
  componentDidUpdate() {
    // const count = this.state.count;

    setTimeout(() => {
      // console.log(`You clicked ${count} times`);
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
      </div>      
    )
  }
}

export default Example;