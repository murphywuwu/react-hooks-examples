import React, { useState, useCallback, useReducer } from "react";

import Form from "./Form.jsx";
import Form2 from './Form2.jsx';
import "./App.css";

const todosReducer = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [{  text: action.text, complete: false}, ...todos];
    case 'TOGGLE_COMPLETE':
      return todos.map((todo, k) => k === action.i ? { ...todo, complete: !todo.complete } : todo)
    case 'RESET':
      return [];
    default:
      return todos
  }
}

export default () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  // const toggleComplete = i =>
  //   setTodos(
  //     todos.map(
  //       (todo, k) =>
  //         k === i
  //           ? {
  //               ...todo,
  //               complete: !todo.complete
  //             }
  //           : todo
  //     )
  //   );

  // const onSubmit = useCallback(text => setTodos([{ text, complete: false }, ...todos]), [todos]);

  return (
    <div className="App">
      <Form
        dispatch={dispatch}
      />
      <Form2
        dispatch={dispatch}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', i })}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  );
};
