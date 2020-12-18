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
    console.log("useEffect contacts");
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
    localStorage.setItem('contacts', JSON.stringify(newContactList));

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

// class oldApp extends Component {
//   state = {
//     contacts: null || [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsFromLocalstorage = localStorage.getItem('contacts');

//     this.setState({
//       contacts: [...(JSON.parse(contactsFromLocalstorage) ?? [])],
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const сurrentContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (сurrentContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(сurrentContacts))
//     }
//   }

//   getContact = newContact => {
//     if (this.state.contacts) {
//       const res = this.state.contacts.find(
//         contact => contact.name === newContact.name,
//       );
//       if (res) {
//         alert(`${newContact.name} is already in contacts`);
//         return;
//       }
//     }

//     this.setState(prevState => ({
//       contacts: [newContact, ...(prevState.contacts ?? [])],
//     }));
//   };

//   filterHandler = event => {
//     const { value } = event.currentTarget;
//     this.setState({
//       filter: value,
//     });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     if (filter) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()),
//       );
//     } else {
//       return contacts;
//     }
//   };

//   deleteContact = id => {
//     const contactsFromLocalstorage = localStorage.getItem('contacts');
//     const newContactList = JSON.parse(contactsFromLocalstorage).filter(
//       contact => contact.id !== id,
//     );
//     localStorage.setItem('contacts', JSON.stringify(newContactList));

//     this.setState({
//       contacts: newContactList,
//     });
//   };

//   render() {
//     // console.log(this.state);
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <div className={s.AppContainer}>
//         <h1>Phonebook</h1>
//         <ContactForm getContact={this.getContact} />
//         <h2 className={s.contacts__title}>Contacts</h2>
//         <Filter filterHandler={this.filterHandler} />
//         <ContactList
//           contacts={filteredContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// // export default oldApp;