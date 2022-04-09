import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  name, label, options, onChangeCb, defaultValue,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <select onChange={({ target }) => onChangeCb(target)} value={defaultValue}>
        {options.map((option) => (
          <option
            name={name}
            value={option.id}
            key={option.id}
          >
            {option.name}

          </option>
        ))}
      </select>

    </label>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeCb: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

Select.defaultProps = {
  defaultValue: 'default',
};
