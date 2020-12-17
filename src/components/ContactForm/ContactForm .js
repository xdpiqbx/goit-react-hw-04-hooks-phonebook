import PropTypes from 'prop-types';

import React, { Component } from 'react';
import s from './ContactForm.module.scss';

import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const { name, number } = this.state;

    if (name && number) {
      this.props.getContact({
        id: uuidv4(),
        name,
        number,
      });
    }

    this.setState({
      name: '',
      number: '',
    });
  };

  onChangeInputHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className={s.ContactForm}>
        <form onSubmit={this.onSubmitHandler}>
          <label>
            <span className={s.ContactForm__title}>Name</span>
            <input
              className={s.ContactForm__input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeInputHandler}
            />
          </label>
          <label>
            <span className={s.ContactForm__title}>Phone</span>
            <input
              className={s.ContactForm__input}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.onChangeInputHandler}
            />
          </label>
          <button className={s.ContactForm__btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  getContact: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  onChangeInputHandler: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
