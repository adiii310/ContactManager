import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import shortid from 'shortid';
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContactHandler = (contact) => {
    // const newId = uuidv4(); ---> uuid
    const shortId = shortid.generate();  // ---> shortId
    setContacts([...contacts, { id: shortId, ...contact }]);
  };

  const deleteContactHandler = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact)
  }

  return (
    <div className='ui container' >
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<ContactList contacts={contacts} getContactId={deleteContactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contacts/:id' element={<ContactDetails/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

// diffrebt ways to pass componet with props in Route componetn.

{/* <Route excat path='/' render={(props)=> (<ContactList {...props} contacts={contacts} getContactId ={deleteContactHandler}  />)} /> */ }
{/* <Route excat path='/add' render={(props)=> (<AddContact {...props}  addContactHandler={addContactHandler}  />)} /> */ }

{/* <Route  path='/' Component={() => <ContactList contacts={contacts} getContactId = {deleteContactHandler} />} /> */ }
{/* <Route path='/add' Component={()=><AddContact addContactHandler={addContactHandler} />} /> */ }
