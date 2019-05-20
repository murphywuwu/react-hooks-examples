import React, { useState, useMemo, useCallback, useEffect } from 'react';

const ChildComponent = ({ action }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let val = action();

    setValue(val)
  }, [action])

  return (
    <>
      Child: {value}
    </>
  )
}

const App = () => {
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = () => {
    console.log(memoCount, 'memo called');
    return memoCount;
  }

  // useCallback，返回一个function
  // 只有当callbackCount的值发生变化，才会调用回调函数
  const callbackFunction = useCallback(() => {
    console.log(callbackCount, 'callback called');

    return callbackCount;
  }, [callbackCount]);
  // 只有组件initial render & unmount时，才会调用函数
  // const callbackFunction = useCallback(() => {
  //   console.log(callbackCount, 'callback called');

  //   return callbackCount;
  // }, []);
  // 只要组件发生重渲染，回调函数都会被调用
  // const callbackFunction = useCallback(() => {
  //   console.log(callbackCount, 'callback called');

  //   return callbackCount;
  // });

  // useMemo返回一个value
  // 只有组件initial render & unmount时，才会调用函数
  // const value = useMemo(memoFunction, [])
  // 只要组件发生重渲染，回调函数都会被调用
  // const value = useMemo(memoFunction)
  // 只有当memoCount的值发生变化，才会调用回调函数
  const value = useMemo(memoFunction, [memoCount])
  
  console.log('value', value);

  return (
    <>
     <ChildComponent action={callbackFunction}/>

     <button onClick={() => setCallbackCount(callbackCount + 1)}>
       Change callback count
     </button>
     <button onClick={() => setMemoCount(memoCount + 1)}>
       Change memo count
     </button>
    </>
  )
}

export default App;