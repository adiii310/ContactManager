import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  // Create a state variable to store the contacts.
  const [contacts, setContacts] = useState([]);

  // Create a constant to store the key for the local storage item.
  const LOCAL_STORAGE_KEY = 'contacts';

  // This function is called when a new contact is added.
  const addContactHandler = (contact) => {
    // Add the new contact to the contacts state variable.
    setContacts([...contacts, contact ]);
  };

  // This useEffect hook is used to load the contacts from local storage when the component mounts.
  useEffect(() => {
    // Get the contacts from local storage.
    const retrievedData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(retrievedData)
    // If there are contacts in local storage, set the contacts state variable to the retrieved data.
    if (data.length > 0) {
      setContacts(data);
    }
  }, []);

  // This useEffect hook is used to save the contacts to local storage whenever the contacts state variable changes.
  useEffect(() => {
    // Save the contacts state variable to local storage.
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
