/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import api from '../../services/api';
import '../../styles/global.css';
import './styles.css';

export default function ListCategoreis() {
  const [categories, setCategoires] = useState([]);
  const [erroLoad, setErroLoad] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      await api
        .get('/category')
        .then(resolv => {
          setCategoires(resolv.data);
        })
        .catch(() => {
          setErroLoad(true);
        });
    }
    // eslint-disable-next-line
    loadCategories();
  }, []);

  async function handleDelete(id) {
    const result = window.confirm('really want to delete?');

    if (result) {
      await api
        .delete(`/category/${id}`)
        .then(() => {
          alert('sucess delete');
        })
        .catch(err => {
          alert('error on delete: ' + err);
        });
    }
  }

  return (
    <div className="body">
      <Header />
      {erroLoad ? (
        <h1>erro ao carregar categories</h1>
      ) : (
        <div className="category">
          <h1>Categorias</h1>
          {categories.map(category => (
            <div className="box" key={String(category._id)}>
              <div className="desc">
                <p>{category.name}</p>
                <span>{category.slug}</span>
              </div>
              <div className="options">
                <Link to="/update-category" className="edit">
                  edite
                </Link>
                <button
                  onClick={() => handleDelete(category._id)}
                  type="button"
                  className="remove"
                >
                  remove
                </button>
              </div>
            </div>
          ))}
          <Link className="buttonAdd" to="/register-category">
            ADD NEW CATEGORY
          </Link>
        </div>
      )}
    </div>
  );
}
