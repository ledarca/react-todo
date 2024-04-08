import React from "react";

const InputWithLabel = ({ label, todoTitle, onInputChange}) => {
    return (
        <>
            <label htmlFor="todoTitle">{label}</label>
            <input id="todoTitle" type="todoTitle" value={todoTitle} onChange={onInputChange} autoFocus />
        </>
    );
}

export default InputWithLabel;