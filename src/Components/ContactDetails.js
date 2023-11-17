import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';



const ContactDetails = () => {
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const userr = "https://www.w3schools.com/w3images/avatar2.png";
  const { name, email } = state;

  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className='content'>{id}</div>
        <div className='image'>
          <img src={userr} alt='user' />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='description'>{email}</div>
          <Link to='/'>
            <button className='ui button blue'>back</button>
          </Link>
          <button className='ui button blue' onClick={() => setEdit(!edit)}>
            {edit ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
