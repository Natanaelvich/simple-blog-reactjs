import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">Blog Devs</h1>
      <div className="buttons">
        <h2 className="home">
          <Link
            style={{ textDecoration: 'none', color: 'rgb(240, 235, 235)' }}
            to={'/'}
          >
            Home
          </Link>
        </h2>
        <h2 className="link">Link</h2>
        <h2 className="disable">Disbale</h2>
      </div>
    </div>
  );
}
