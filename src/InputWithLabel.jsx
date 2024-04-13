import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, children, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label> 
      <input id={id} type="text" name="title" value={value} onChange={onChange} ref={inputRef} />
    </>
  );
}

export default InputWithLabel;
