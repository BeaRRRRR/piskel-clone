import React from 'react';
import './Color.scss';
import PropTypes from 'prop-types';
import colors from '../../../../util/colors';

function Color({
  currentColor, setCurrentColor, previousColor, setPreviousColor,
}) {
  function swapColors() {
    const newCurrentColor = previousColor;
    const newPreviousColor = currentColor;
    setCurrentColor(newCurrentColor);
    setPreviousColor(newPreviousColor);
  }

  return (
    <div className="Color">
      <div className="select">
        <input
          className="current-color"
          id="currentColor"
          type="color"
          value={currentColor}
          onChange={(e) => {
            setCurrentColor(e.nativeEvent.target.value);
          }}
          style={{ backgroundColor: currentColor }}
        />
        <input
          className="previous-color"
          id="previousColor"
          type="color"
          value={previousColor}
          onChange={(e) => {
            setPreviousColor(e.nativeEvent.targer.value);
          }}
          style={{ backgroundColor: previousColor }}
        />
      </div>
      <button type="button" className="swap" onClick={swapColors}>Swap</button>
    </div>
  );
}

Color.propTypes = {
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  previousColor: PropTypes.string,
  setPreviousColor: PropTypes.func,
};

Color.defaultProps = {
  currentColor: colors.RED,
  setCurrentColor: () => {},
  previousColor: colors.BLUE,
  setPreviousColor: () => {},
};

export default Color;
