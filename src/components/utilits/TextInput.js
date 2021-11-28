import React from 'react';

const TextInput = ({
  labelName,
  name,
  value,
  handler,
  classList = '',
})=> {
  return (
    <label htmlFor={name}>
      {labelName}
      <input
        className={Array.isArray(classList) ? classList.join(' ') : classList}
        type="text"
        name={name}
        value={value}
        onChange={handler}
      />
    </label>
  );
};

export default TextInput;
