import React from 'react'

const ContactCard = (props) => {
    const user= "https://i.pinimg.com/736x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg"
    const {id, name, email} = props.contact;
    return (
        <div className="item" >
        {id}
        <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
                
            </div>
            <i style={{ float: 'right', color: 'red' }} className='trash alternate outline icon'
            onClick={()=>props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard