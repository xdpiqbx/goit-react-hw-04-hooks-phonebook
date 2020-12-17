import PropTypes from 'prop-types';

import React from 'react';
import Contact from '../Contact';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, deleteContact }) => {
  if (contacts.length > 0) {
    return (
      <ul className={s.list}>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            deleteContact={deleteContact}
            key={contact.id}
          />
        ))}
      </ul>
    );
  } else {
    return <h2>There is no contacts</h2>;
  }
};

export default ContactList;

ContactList.protoTypes = {
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};
