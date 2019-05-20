import React, { useState, useEffect, useDebugValue } from 'react';

function useOffline () {
  const [isOffline, setIsOffline] = useState(false);

  function onOffline() {
    setIsOffline(true);
  }
  
  function onOnline() {
    setIsOffline(false);
  }

  useDebugValue(isOffline ? 'offline' : 'online');

  useEffect(() => {
    // 系统状态变化与数据源数据相关联导致的副作用
    // 监听系统状态 -> 数据源 
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    }
  }, []);

  return isOffline;
}


function App () {
  const isOffline = useOffline();

  if (isOffline) {
    return (<div>Sorry, ypu are offline...</div>)
  }

  return (<div>You are online!</div>)
}

export default App;