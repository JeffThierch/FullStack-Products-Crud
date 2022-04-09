import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  name, label, type, value, onChangeCb,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={({ target }) => onChangeCb(target)}
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeCb: PropTypes.func.isRequired,
};
