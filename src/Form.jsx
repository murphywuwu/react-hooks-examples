import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

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