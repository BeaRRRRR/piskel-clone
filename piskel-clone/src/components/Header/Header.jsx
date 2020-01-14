import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import netlifyIdentity from 'netlify-identity-widget';
import './Header.scss';

function Header({ render }) {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
  }, []);

  return (
    <div className="Header">
      <div className="title">Piskel Clone</div>
      <div className="container">
        {render(isModalOpen, setModalOpen)}
        <button type="button" className="settings-button" onClick={() => setModalOpen(!isModalOpen)}>Settings</button>
        <div id="netlify-modal" className="netlify-modal" data-netlify-identity-button />
      </div>
    </div>
  );
}

Header.propTypes = {
  render: PropTypes.func,
};

Header.defaultProps = {
  render: () => {},
};

export default Header;
