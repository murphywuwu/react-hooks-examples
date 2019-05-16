import React, { useEffect, useState } from 'react';

function LifeCycleDemo (props) {

  // 在组件初次渲染后，打印render
  // 在组件卸载时，打印unmounting
  useEffect(() => {
    console.log('render');
    
    return () => console.log('unmounting');
  }, []);

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
      {mounted && <LifeCycleDemo name={name}/>}
    </>
  )
}

export default LifeCycle;