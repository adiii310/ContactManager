import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddContact({ addContactHandler }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (state.name === '' || state.email === '') {
      alert("All fields are mandatory!!");
      return;
    }
    addContactHandler(state);
    setState({ name: '', email: '' });
    navigate('/');
  };

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={add}>
        <div className='field'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            autoComplete='name'
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email'
            autoComplete='email'
            value={state.email.toLowerCase()}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className='ui button blue' type='submit'>Add</button>
        <Link to='/'>
          <button className='ui button red' type='submit'>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default AddContact;
