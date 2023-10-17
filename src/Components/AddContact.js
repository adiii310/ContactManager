import React from 'react'

// creating class component

class AddContact extends React.Component {
    state = {
        id:"",
        name: "",
        email: "",
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert("All fields are mandatory!!")
            return;
        }
    this.props.addContactHandler(this.state);
    this.setState({id:'',name:'',email:''})

    }
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                    <label htmlFor='id'>Id</label>
                        <input id='id' type='text' name='id' placeholder='ID' autoComplete='id'
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })} />
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' name='name' placeholder='Name' autoComplete='name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' name='email' placeholder='email' autoComplete='email'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;