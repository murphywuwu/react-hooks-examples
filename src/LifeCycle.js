import React, { useEffect, useState } from 'react';

function LifeCycleDemo () {
  useEffect(() => {
    console.log('render');
    
    // useEffect不仅仅在组件unmounted时会调用，它也会在每次render调用前被调用(useEffect的默认行为)
    // 这实际上比componentWillUnmount生命周期更有力量，因为它可以让你在每次render前后，都执行一次副作用
    // 组件卸载时，只会打印一次unmounting, 但不会打印render
    return () => console.log('unmounting');
  });

  return "I'm a lifecycle demo";
}

function LifeCycle () {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  return (
    <>
       {/* 点击Re-render按钮，先打印unmounting，再打印render */}
      <button onClick={reRender}>Re-render</button>
      {/* 单击show/hide按钮，rendder和unmounting交替打印 */}
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifeCycleDemo/>}
    </>
  )
}

export default LifeCycle;