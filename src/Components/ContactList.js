import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteHandeler =(id)=>{
    props.getContactId(id);
  }
    const rendercontactlist = props.contacts.map(contact =>{
        return <ContactCard contact={contact} key={contact.id} clickHandler={deleteHandeler} />;      
    })
  return (
   <div className='ui celled list'>{rendercontactlist}</div>
  )
}

export default ContactList