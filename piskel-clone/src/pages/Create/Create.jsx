import React, { useState, useEffect } from 'react';
import './Create.scss';
import Header from '../../components/Header/Header';
import Tools from '../../components/Tools/Tools';
import Frames from '../../components/Frames/Frames';
import Canvas from '../../components/Canvas/Canvas';
import Preview from '../../components/Preview/Preview';
import canvas from '../../util/canvas';
import colors from '../../util/colors';

function Index() {
  const [currentColor, setCurrentColor] = useState(colors.RED);
  const [previousColor, setPreviousColor] = useState(colors.BLUE);
  const [frames, setFrames] = useState(localStorage.getItem('frames') || []);
  const [tool, setTool] = useState('pen');
  // Unit size, e.g. on 32x32 canvas on mouse click should draw 4 pixels
  const [scale, setScale] = useState(1);

  function handleCanvasClick(event) {
    console.log(frames);
    const col = Math.floor(event.nativeEvent.offsetX / scale / scale);
    const row = Math.floor(event.nativeEvent.offsetY / scale / scale);
    canvas.drawOnePixel(col, row, currentColor, scale);
  }

  function handleDrawingLines(event) {
    if (tool === 'pen') {
      canvas.handleDrawingLines(event, currentColor, scale);
    }
  }

  useEffect(() => {
    localStorage.setItem('frames', frames);
  }, [frames]);

  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container">
        <Tools
          setTool={setTool}
        />
        <Frames
          frames={frames}
          setFrames={setFrames}
        />
        <Canvas
          handleClick={handleCanvasClick}
          handleDrawingLines={handleDrawingLines}
          setFrames={setFrames}
        />
        <Preview
          frames={frames}
        />
      </div>
    </div>
  );
}

export default Index;
