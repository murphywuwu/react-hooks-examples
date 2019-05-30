import React, { useEffect, useState, Component } from 'react'
import styles from './App.css'

// 在useEffect的思维模型中，默认都是同步的。副作用变成了React数据流的一部分。
// 对于每一个useEffect调用，一旦你处理正确，你的组件能够更好地处理边缘情况。
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

// 在class组件生命周期的思维模型，副作用的行为和渲染输出是不同的。
// UI渲染是被props和state驱动的，并且能确保步调一致，但副作用并不是这样的。
class Example extends Component {
  state = {
    count: 0
  }
  componentDidUpdate() {
    const count = this.state.count;

    setTimeout(() => {
      console.log(`You clicked ${count} times`);
      // console.log(`You clicked ${this.state.count} times`)
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