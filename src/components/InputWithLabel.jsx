import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const InputWithLabel = ({ id, children, value, onChange }) => {
  //console.log('Componente InputWithLabel renderizado');
  const inputRef = useRef(null);

  useEffect(() => {
    //console.log('useEffect ejecutado');
    inputRef.current.focus();
  //  inputRef.current.style.border = '5px solid red'; I use this, just to highlight the focus
  }, []);
  
   return (
    <>
      <label htmlFor={id}>{children}</label> 
      <input id={id} type="text" name="title" value={value} onChange={onChange} ref={inputRef} placeholder="New task..."/>
    </>
  );
}

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
