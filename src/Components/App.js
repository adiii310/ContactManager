import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import UpdateContact from './UpdateContact';
import shortid from 'shortid';
import api from '../api/contacts';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // retrieve contacts from the JSON server
  const retrieveContacts = async () => {
    try {
      const response = await api.get('/contacts/');
      return response.data;
    } catch (error) {
      console.error('Error in retrieving data', error);
      throw error;
    }
  };

  useEffect(() => {
      const getAllContacts = async () => {
        try {
          const allContacts = await retrieveContacts();
          if (allContacts) {
            setContacts(allContacts);
            setLoading(false);
          }
        } catch (error) {
          console.error('Data not found', error);
          setLoading(false);
        }
      };
      getAllContacts();


  }, []);

  const addContactHandler = async (contact) => {
    try {
      const shortId = shortid.generate();
      const request = {
        id: shortId,
        ...contact,
      };
      const response = await api.post('/contacts', request);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error('Error adding contact:', error);
      // Handle the error, e.g., display an error message to the user or log it
    }
  };

  const deleteContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContact = contacts.filter((contact) => contact.id !== id);
      setContacts(newContact);
    } catch (error) {
      console.error('Error deleting contact:', error);
      // Handle the error, e.g., display an error message to the user or log it
    }
  };

  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const { id, name, email } = response.data;
      setContacts(
        contacts.map((c) => (c.id === id ? { ...response.data } : c))
      );
    } catch (error) {
      console.error('Error updating contact:', error);
      // Handle the error, e.g., display an error message to the user or log it
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={deleteContactHandler}
                loading={loading}
              />
            }
          />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route
            path="/edit/:id"
            element={<UpdateContact updateContactHandler={updateContactHandler} contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
