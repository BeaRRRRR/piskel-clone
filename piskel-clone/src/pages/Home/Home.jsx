import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Home.scss';
import netlifyIdentity from 'netlify-identity-widget';
import example1 from '../../assets/img/sprite-examples/example1.gif';

function Home() {
  useEffect(() => {
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
  }, []);

  return (
    <div className="Home">
      <div id="netlify-modal" className="netlify-modal" data-netlify-identity-button />
      <div className="description">
        <p className="title">
          Piskel-clone
        </p>
        <a className="author" href="https://github.com/BeaRRRRR">Made by BeaRRRRR</a>
        <p className="desc">
          A clone of the
          {' '}
          <a href="https://www.piskelapp.com/">piskel website</a>
          {' '}
          used to create pixel animation
        </p>
        <div className="create">
          <Link to="/create" className="link">Create a sprite</Link>
        </div>
      </div>
      <div className="example-sprites">
        <p className="title">Example Sprites</p>
        <p className="desc">Here are examples of what you can do!</p>
        <div className="examples">
          <div>
            <div className="img-container">
              <img src={example1} alt="example 1" />
            </div>
            <p>Expressionist gif</p>
          </div>
          <div>
            <div className="img-container">
              <img src={example1} alt="example 1" />
            </div>
            <p>Pacman</p>
          </div>
          <div>
            <div className="img-container">
              <img src={example1} alt="example 1" />
            </div>
            <p>Running</p>
          </div>
        </div>
      </div>
      <div className="features-overview">
        <p className="title">
          Features
        </p>
        <div className="features">
          <div>
            <p className="title">Live Preview</p>
            <p className="desc">A live preview of the animation you are creating, with on-the-fly frame rate adjustment</p>
          </div>
          <div>
            <p className="title">Open Source</p>
            <p className="desc">
              This project is completely open source and can be found
              <a href="https://github.com/rolling-scopes-school/bearrrrr-RS2019Q3/tree/piskel-clone"> here</a>
            </p>
          </div>
          <div>
            <p className="title">Made with React</p>
            <p className="desc">This project is made in React so you can fork my repo and improve this site, or write a PR</p>
          </div>
          <div>
            <p className="title">Save gifs</p>
            <p className="desc">You can save you gif to disk, just click the save button next to the preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
