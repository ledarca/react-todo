import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, type, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>Title:</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus
      />
    </>
  );
};

export default InputWithLabel;
