import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContactHandler = (contact) => {
    setContacts([...contacts, contact ]);
  };

const deleteContactHandler =(id)=>{
  const newContact = contacts.filter((contact)=> contact.id !== id);
  setContacts(newContact)
}
  return (
    <div className='ui container' >
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId ={deleteContactHandler} />
    </div>
  );
}

export default App;
