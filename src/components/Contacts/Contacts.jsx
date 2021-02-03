import React from 'react';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.container}>
        <p className={s.name}>
          {name}: {number}{' '}
        </p>
        {
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        }
      </li>
    ))}
  </ul>
);

export default Contacts;
