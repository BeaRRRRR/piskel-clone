import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tools.scss';
import Color from './components/Color/Color';
import colors from '../../util/colors';
import canvas from '../../util/canvas';

function Tools({
  tool, setTool, currentColor, setCurrentColor, previousColor, setPreviousColor,
}) {
  return (
    <div className="Tools">
      <div className="tools-container">
        <div className="pen">
          <img src="https://img.icons8.com/material/24/000000/pencil--v1.png" alt="pen" />
        </div>
        <div className="fill">
          <img src="https://img.icons8.com/material/24/000000/fill-color--v1.png" alt="fill" />
        </div>
        <div
          className="eraser"
          onClick={() => {
            setTool('eraser');
          }}
        >
          <img src="https://img.icons8.com/material/24/000000/erase--v1.png" alt="eraser" />
        </div>
        <div className="stroke">
          <img src="https://img.icons8.com/material/24/000000/line--v1.png" alt="stroke" />
        </div>
        <div
          className="fill-all"
          onClick={() => {
            canvas.ctx.fillStyle = currentColor;
            canvas.ctx.fillRect(0, 0, 512, 512);
          }}
        >
          <img src="https://img.icons8.com/material/24/000000/blur--v1.png" alt="fill-all" />
        </div>
      </div>
      <Color
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        previousColor={previousColor}
        setPreviousColor={setPreviousColor}
      />
    </div>
  );
}

Tools.propTypes = {
  tool: PropTypes.string,
  setTool: PropTypes.func,
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  previousColor: PropTypes.string,
  setPreviousColor: PropTypes.func,
};

Tools.defaultProps = {
  tool: 'pen',
  setTool: () => {},
  currentColor: '#ff0000',
  setCurrentColor: () => {},
  previousColor: '#0000ff',
  setPreviousColor: () => {},
};

export default Tools;
