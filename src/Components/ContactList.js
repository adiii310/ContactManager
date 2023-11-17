import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import './style.css';

const ContactList = (props) => {
  const { contacts, getContactId, loading } = props;
  

  const deleteHandler = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact) => (
    <ContactCard contact={contact} key={contact.id} clickHandler={deleteHandler} />
  ));

  return (
    <div className='main'>
      <h2>Contact List</h2>
      <Link to="/add">
        <button className='ui button blue right'>Add Contact</button>
      </Link>

      <div className='ui celled list'>

        {loading ? (
          // Skeleton loading when contacts are still loading
          <>
            <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
              <Skeleton count={4} className='length' />
            </SkeletonTheme>

          </>
        ) : (
          // Render the actual contact list when contacts are loaded
          renderContactList
        )}

      </div>
    </div>
  );
};

export default ContactList;
