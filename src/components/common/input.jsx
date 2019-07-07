import React from "react";

const Input = ({ name, lable, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>

      <input
        autoFocus
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
