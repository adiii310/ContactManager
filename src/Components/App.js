import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact ]);
  };

  useEffect(() => {
    const retrievedData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(retrievedData)
    if (data) {
      setContacts(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
