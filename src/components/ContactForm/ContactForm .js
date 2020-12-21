import PropTypes from 'prop-types';

import React, { useState } from 'react';
import s from './ContactForm.module.scss';

import { v4 as uuidv4 } from 'uuid';

const ContactForm = props => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault();
    if (name && number) {
      props.getContact({
        id: uuidv4(),
        name,
        number,
      });
    }
    setName('')
    setNumber('')
  };

  const onChangeInputHandler = event => {
    const { name, value } = event.currentTarget;
    switch(name){
      case 'name':
        setName(value)
        return
      case 'number':
        setNumber(value)
        return
      default:
        return
    }
  };

  return (
    <div className={s.ContactForm}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span className={s.ContactForm__title}>Name</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInputHandler}
          />
        </label>
        <label>
          <span className={s.ContactForm__title}>Phone</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="number"
            value={number}
            onChange={onChangeInputHandler}
          />
        </label>
        <button className={s.ContactForm__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  getContact: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  onChangeInputHandler: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};