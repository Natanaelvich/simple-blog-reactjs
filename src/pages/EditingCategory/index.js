import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';
import Header from '../../components/header';

export default function RegisterCategory() {
  const [title, setTitle] = useState('');
  const [slug, setsLug] = useState('');

  async function handleSumnit(e) {
    e.preventDefault();

    await api
      .post('/category', {
        name: title,
        slug,
      })
      .then(() => {
        alert('Add new Category');
      })
      .catch(err => {
        alert('impossible add category: ' + err);
      });
  }
  return (
    <div className="body">
      <Header />
      <div className="form">
        <h1>Nova Categoria</h1>
        <form method="post" onSubmit={handleSumnit}>
          <label htmlFor="title">
            Title
            <input
              value={title}
              onChange={txt => setTitle(txt.target.value)}
              type="text"
              className="title"
              id="title"
            />
          </label>

          <label htmlFor="slug">
            Slug
            <input
              value={slug}
              onChange={txt => setsLug(txt.target.value)}
              type="text"
              className="slug"
              id="slug"
            />
          </label>

          <button type="submit">SALVAR</button>
        </form>
      </div>
    </div>
  );
}
