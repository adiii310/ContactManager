import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteHandeler = (id) => {
    props.getContactId(id);
  }
  const rendercontactlist = props.contacts.map(contact => {
    return <ContactCard contact={contact} key={contact.id} clickHandler={deleteHandeler} />;
  })
  return (
    <div className='main'>
      <h2>Contact List</h2>
      <Link to="/add">

      <button  className='ui button blue right'>Add Contact</button>
      </Link>
      <div className='ui celled list'>
        {rendercontactlist}</div>
    </div>
  )
}

export default ContactList