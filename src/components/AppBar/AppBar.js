import React from 'react';
import { Link } from 'gatsby';

export default ({ path }) => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <h1>Hey, It's {path}!</h1>
  </div>
);
