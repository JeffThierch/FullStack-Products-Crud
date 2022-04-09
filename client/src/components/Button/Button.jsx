import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClickCb, text }) {
  return (
    <button type="button" onClick={onClickCb}>{text}</button>
  );
}

Button.propTypes = {
  onClickCb: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
