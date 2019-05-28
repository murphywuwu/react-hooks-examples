import React, { useState } from "react";

import useInputValue from './hook/useInputValue'

/* 
 * memo vs useMemo
 * https://github.com/facebook/react/issues/14616
 */
export default React.memo(({ dispatch }) => {
  const { resetValue, ...text } = useInputValue("");
  console.log('Form is rendered');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({text: text.value, type: 'ADD_TODO'});
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
});