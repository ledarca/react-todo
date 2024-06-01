import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, children, value, onChange }) => {
  //console.log('Componente InputWithLabel renderizado');
  const inputRef = useRef(null);

  useEffect(() => {
    //console.log('useEffect ejecutado');
    inputRef.current.focus();
  //  inputRef.current.style.border = '5px solid red'; I use this, just to highlight the focus
  });
  
   return (
    <>
      <label htmlFor={id}>{children}</label> 
      <input id={id} type="text" name="title" value={value} onChange={onChange} ref={inputRef} placeholder="New task..."/>
    </>
  );
}

export default InputWithLabel;
