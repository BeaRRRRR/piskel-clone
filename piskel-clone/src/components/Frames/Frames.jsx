import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Frame.scss';
import canvas from '../../util/canvas';

function Frames({ frames, setFrames }) {
  function handleMove() {
    console.log('TODO: handle move');
  }

  function deleteFrame(index) {
    const newFrames = [...frames];
    newFrames.splice(index, 1);
    setFrames(newFrames);
  }

  function addFrame() {
    canvas.clear();
    setFrames([...frames, canvas.canvas.toDataUrl()]);
  }

  return (
    <div className="Frames">
      {frames.map((frame, index) => (
        <div className="frame">
          <div className="top">
            <div className="count">{frame.count}</div>
            {/* <button type="button" className="delete" onClick={deleteFrame(index)} /> */}
          </div>
          <div className="bottom">
            <button type="button" className="move" onClick={handleMove} />
            {/* <button type="button" className="duplicate" onClick={setFrames([...frames, frame])} /> */}
          </div>
        </div>
      ))}
      <div className="new" onClick={addFrame}>
        <img src="https://img.icons8.com/small/16/000000/create-new.png" alt="Plus icon" />
        <p>Add new Frame</p>
      </div>
    </div>
  );
}

Frames.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object),
  setFrames: PropTypes.func,
};

Frames.defaultProps = {
  frames: [],
  setFrames: () => {},
};

export default Frames;
