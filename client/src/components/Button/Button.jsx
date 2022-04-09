import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClickCb, text, isDisabled }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClickCb}
    >
      {text}

    </button>
  );
}

Button.propTypes = {
  onClickCb: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
};
