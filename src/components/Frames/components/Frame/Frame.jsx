import React from 'react';
import './Frame.scss';
import PropTypes from 'prop-types';

function Frame({
  frame, duplicateFrame, deleteFrame, handleMove, setActive, isActive, index,
}) {
  const background = `url('${frame}') no-repeat center/contain`;
  return (
    <div style={{ background }} className={`Frame ${isActive ? 'active' : ''}`} onClick={setActive.bind(this, index)}>
      <div className="top">
        <div className="count">{index + 1}</div>
        <button type="button" className="delete" onClick={(e) => deleteFrame(index, e)} />
      </div>
      <div className="bottom">
        <button type="button" className="move" onClick={handleMove} />
        <button
          type="button"
          className="duplicate"
          onClick={(e) => duplicateFrame(index, e)}
        />
      </div>
    </div>
  );
}


Frame.propTypes = {
  frame: PropTypes.string,
  duplicateFrame: PropTypes.func,
  deleteFrame: PropTypes.func,
  handleMove: PropTypes.func,
  setActive: PropTypes.func,
  isActive: PropTypes.bool,
  index: PropTypes.number,
};

Frame.defaultProps = {
  frame: '',
  duplicateFrame: () => {},
  deleteFrame: () => {},
  handleMove: () => {},
  setActive: () => {},
  isActive: false,
  index: 0,
};

export default Frame;
