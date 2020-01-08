import React, { useState } from 'react';
import './Tools.scss';
import Color from './components/Color/Color';
import colors from '../../util/colors';
import canvas from '../../util/canvas';

function Tools() {
  return (
    <div className="Tools">
      <div className="tools-container">
        <div className="pen">
          <img src="https://img.icons8.com/material/24/000000/pencil--v1.png" alt="pen" />
        </div>
        <div className="fill">
          <img src="https://img.icons8.com/material/24/000000/fill-color--v1.png" alt="fill" />
        </div>
        <div className="eraser">
          <img src="https://img.icons8.com/material/24/000000/erase--v1.png" alt="eraser" />
        </div>
        <div className="stroke">
          <img src="https://img.icons8.com/material/24/000000/line--v1.png" alt="stroke" />
        </div>
        <div className="fill-all">
          <img src="https://img.icons8.com/material/24/000000/blur--v1.png" alt="fill-all" />
        </div>
      </div>
      <Color />
    </div>
  );
}

export default Tools;
