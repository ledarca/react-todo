import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, children, value, onChange }) => {
 // console.log('Componente InputWithLabel renderizado');
  const inputRef = useRef(null);

  useEffect(() => {
   // console.log('useEffect ejecutado');
    inputRef.current.focus();
  }, [value]);
  
   return (
    <>
      <label htmlFor={id}>{children}</label> 
      <input id={id} type="text" name="title" value={value} onChange={onChange} ref={inputRef} />
    </>
  );
}

export default InputWithLabel;

