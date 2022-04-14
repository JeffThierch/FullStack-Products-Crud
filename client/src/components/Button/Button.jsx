import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  onClickCb, text, isDisabled, className,
}) {
  return (
    <button
      className={className}
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
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isDisabled: false,
};
