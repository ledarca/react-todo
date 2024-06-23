import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const InputWithLabel = ({ id, children, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
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
