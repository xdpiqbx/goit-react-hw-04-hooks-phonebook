import s from './App.module.scss';
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm ';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: null || [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalstorage = localStorage.getItem('contacts');

    this.setState({
      contacts: [...(JSON.parse(contactsFromLocalstorage) ?? [])],
    });
  }

  // Надо ещё подумать
  // componentDidUpdate(prevProps, prevState) {
  //   const сurrentContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (сurrentContacts !== prevContacts) {
  //     const contactsFromLocalstorage = localStorage.getItem('contacts');
  //     localStorage.setItem(
  //       'contacts',
  //       JSON.stringify([...(JSON.parse(contactsFromLocalstorage) ?? [])]),
  //     );
  //   }
  // }

  getContact = newContact => {
    if (this.state.contacts) {
      const res = this.state.contacts.find(
        contact => contact.name === newContact.name,
      );
      if (res) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }

    this.addContactToLocalstorage(newContact);

    this.setState(prevState => ({
      contacts: [newContact, ...(prevState.contacts ?? [])],
    }));
  };

  addContactToLocalstorage = contact => {
    const contactsFromLocalstorage = localStorage.getItem('contacts');
    localStorage.setItem(
      'contacts',
      JSON.stringify([
        contact,
        ...(JSON.parse(contactsFromLocalstorage) ?? []),
      ]),
    );
  };

  filterHandler = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    } else {
      return contacts;
    }
  };

  deleteContact = id => {
    const contactsFromLocalstorage = localStorage.getItem('contacts');
    const newContactList = JSON.parse(contactsFromLocalstorage).filter(
      contact => contact.id !== id,
    );
    localStorage.setItem('contacts', JSON.stringify(newContactList));

    this.setState({
      contacts: newContactList,
    });
  };

  render() {
    // console.log(this.state);
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className={s.AppContainer}>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.getContact} />
        <h2 className={s.contacts__title}>Contacts</h2>
        <Filter filterHandler={this.filterHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
