import s from './App.module.scss';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm ';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App (){
  
  const [contacts, setContacts] = useState ('')
  const [filter, setFilter] = useState ('')

  useEffect(() => {
    const contactsFromLocalstorage = localStorage.getItem('contacts');
    setContacts([...(JSON.parse(contactsFromLocalstorage) ?? [])])
  },[])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const getContact = newContact => {
    if (contacts) {
      const res = contacts.find(
        contact => contact.name === newContact.name,
      );
      if (res) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }
    setContacts(prevContacts => ([newContact, ...prevContacts]))
  };

  const filterHandler = event => {
    const { value } = event.currentTarget;
    setFilter(value)
  };

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    } else {
      return contacts;
    }
  };

  const deleteContact = id => {
    const contactsFromLocalstorage = localStorage.getItem('contacts');
    const newContactList = JSON.parse(contactsFromLocalstorage).filter(
      contact => contact.id !== id,
    );
    setContacts(newContactList)
  };

  return (
    <div className={s.AppContainer}>
      <h1>Phonebook</h1>
      <ContactForm
        getContact={getContact}
      />
      <h2 className={s.contacts__title}>Contacts</h2>
      <Filter
       filterHandler={filterHandler}
       />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  )
}