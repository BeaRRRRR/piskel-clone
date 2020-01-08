import React from 'react';
import Link from 'react-router-dom/Link';

function Home() {
  return (
    <div>
      <Link to="/create">Create a sprite</Link>
    </div>
  );
}

export default Home;
