import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddContact({ addContactHandler }) {
    const nevigate = useNavigate();
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
        nevigate('/')
    };

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>


            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    {/* <label htmlFor='id'>Id</label>
                    <input
                        id='id'
                        type='text'
                        name='id'
                        placeholder='ID'
                        autoComplete='id'
                        value={state.id}
                        onChange={(e) => setState({ ...state, id: e.target.value })}
                    /> */}
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
                    <h2>Contact List</h2>
                </Link>


            </form>
        </div>
    );
}

export default AddContact;
