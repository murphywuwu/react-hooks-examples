import React, { useEffect, useState } from 'react';

function LifeCycleDemo (props) {
  useEffect(() => {
    console.log('render');
    
    // 组件卸载时，只会打印一次unmounting, 但不会打印render
    return () => console.log('unmounting');
  }, [props.name]);

  return "I'm a lifecycle demo";
}

function LifeCycle () {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);
  const [name, setName] = useState('wuwu');

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);
  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
       {/* 点击Re-render按钮，useEffect里的监听函数都不会调用 */}
      <button onClick={reRender}>Re-render</button>
      {/* 单击show/hide按钮，rendder和unmounting交替打印 */}
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {/* 在input框中输入值时，先打印unmounting再打印render */}
      <input type="text" name={name} onChange={handleNameChange}/>
      {mounted && <LifeCycleDemo name={name}/>}
    </>
  )
}

export default LifeCycle;