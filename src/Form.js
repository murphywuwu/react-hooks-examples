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
  // 当name变量变化时或首次渲染，回调函数被调用 
  useEffect(() => {
    console.log(name + ' ' + surname)
    document.title = name + ' ' + surname
  }, [name])

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