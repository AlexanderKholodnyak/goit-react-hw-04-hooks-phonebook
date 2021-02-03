import React, { useState } from 'react';
//import shortid from 'shortid';
import s from './Form.module.css';

// class Form extends Component {
// state = {
//   name: '',
//   number: ''
// };
function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(event) {
    // const { name, value } = event.currentTarget;
    //console.log({ name, value });
    // useState( value );
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    // this.setState({ name: '', number: '' });
    //   this.props.onSubmit(this.name, this.number);
    onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder=""
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder=""
          onChange={handleChange}
          className={s.input}
        />
      </label>

      {
        <button type="submit" className={s.button}>
          Add contact
        </button>
      }
    </form>
  );
}

export default Form;
