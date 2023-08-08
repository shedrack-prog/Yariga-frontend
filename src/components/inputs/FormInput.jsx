import React from 'react';

const FormInput = ({
  placeholder,
  value,
  handleChange,
  classNames,
  inputContainer,
}) => {
  return (
    <div className={inputContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`${classNames} input placeholder:dark:text-dark-light-text`}
      />
    </div>
  );
};

export default FormInput;
