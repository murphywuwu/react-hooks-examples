import React, { useState, useEffect } from 'react'

function Form() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const [width, setWidth] = useState(window.innerWidth);

  // 上面任意变量改变时或首次渲染，回调函数都会被调用
  // useEffect(() => {
  //   console.log(name + ' ' + surname)
  //   document.title = name + ' ' + surname
  // })
  // 首次渲染，会打印打印name + ' ' + surname，但不会打印unmouting
  // 每当name变量的值发生变化时，都会导致组件重渲染
  // 而每当组件重渲染，会先打印unmouting,再打印name + ' ' + surname
  // useEffect(() => {
  //   console.log(name + ' ' + surname)
  //   document.title = name + ' ' + surname

  //   return () => console.log('unmounting');
  // }, [name])

  // 除了组件加载和卸载时会被调用，其余时候都不会被调用
  useEffect(() => {
    console.log(name + ' ' + surname)
    document.title = name + ' ' + surname

    return () => console.log('unmounting');
  }, [])

  // name或surname变化时或首次渲染，回调函数被调用
  // useEffect(() => {
  //   console.log(name + ' ' + surname)
  //   document.title = name + ' ' + surname
  // }, [name, surname])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  function handleNameChane(e) {
    setName(e.target.value);
    
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleNameChane}/>
      <input type="text" value={surname} onChange={handleSurnameChange}/>
      <p>Hello, {name} {surname}</p>
      <p>Window width: {width}</p>
    </>
  )
}

export default Form;