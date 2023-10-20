import React, { useState } from 'react';
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';

function UpdateContact({ updateContactHandler, contacts }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  const { id: skippedProperty, name, email } = data;

  const [state, setState] = useState({
    id,
    name,
    email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const update = (e) => {
    e.preventDefault();
    if (!state.name || !state.email) {
      alert("All fields are mandatory!!");
      return;
    }
    updateContactHandler(state);
    setState({ name: '', email: '' });
    navigate('/');
  };

  return (
    <div className='ui main'>
      <h2>Update Contact {id}</h2>
      <form className='ui form' onSubmit={update}>
        <div className='field'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            autoComplete='name'
            value={state.name}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='email'
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <button className='ui button blue' type='submit'>Update</button>
        <Link to='/'>
          <button className='ui button red' type='button'>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default UpdateContact;
