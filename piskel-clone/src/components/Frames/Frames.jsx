import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Frames.scss';
import canvas from '../../util/canvas';
import Frame from './components/Frame/Frame';

function Frames({
  frames, setFrames, currentFrame, setCurrentFrame,
}) {
  function handleMove() {
    console.log('TODO: handle move');
  }

  function deleteFrame(index, event) {
    event.stopPropagation();
    const newFrames = [...frames];
    newFrames.splice(index, 1);
    setFrames(newFrames);
  }

  function addFrame() {
    const newFrames = [...frames];
    newFrames[currentFrame] = canvas.canvas.toDataURL();
    if (frames.length !== 0) {
      canvas.clear();
      newFrames.push(canvas.canvas.toDataURL());
    }
    setFrames([...newFrames]);
    setCurrentFrame(newFrames.length - 1);
  }

  function duplicateFrame(index, event) {
    /* Click on duplicate frame button also triggers the setActive method(because of event bubbling)
       and due to set state with hooks being asynchronous, setActive method reads frames before
       duplicateFrame sets them so our frames array ends up without the duplicated frame
    */
    event.stopPropagation();
    const newFrames = [...frames];
    newFrames.splice(index, 0, newFrames[index]);
    setFrames(newFrames);
  }

  function setActive(index) {
    const newFrames = [...frames];
    newFrames[currentFrame] = canvas.canvas.toDataURL();
    setFrames(newFrames);
    setCurrentFrame(index);
  }

  return (
    <div className="Frames">
      {console.log(frames)}
      {frames.map((frame, index) => (
        <Frame
          key={`${frame}${index}`}
          frame={frame}
          duplicateFrame={duplicateFrame}
          deleteFrame={deleteFrame}
          handleMove={handleMove}
          setActive={setActive}
          isActive={currentFrame === index}
          index={index}
        />
      ))}
      <div role="button" tabIndex={0} className="new" onClick={addFrame}>
        <img src="https://img.icons8.com/small/32/000000/create-new.png" alt="Plus icon" />
        <p>Add new Frame</p>
      </div>
    </div>
  );
}

Frames.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.string),
  setFrames: PropTypes.func,
  currentFrame: PropTypes.number,
  setCurrentFrame: PropTypes.func,
};

Frames.defaultProps = {
  frames: [],
  setFrames: () => {},
  currentFrame: 0,
  setCurrentFrame: () => {},
};

export default Frames;
