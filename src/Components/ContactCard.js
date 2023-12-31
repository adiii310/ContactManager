import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

const ContactCard = (props) => {
    const user = "https://i.pinimg.com/736x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg"
    const { id, name, email } = props.contact;
    const nevigate= useNavigate();
    // const updatenevigate = useNavigate();
    const handleClick = () =>{
        nevigate(`/contacts/${id}`, {state:{name,email,user}})
    }
   const updatepage = () =>{
    nevigate(`/edit/${id}`,{state:{id,name,email}})
   }
    return (
        <div className="item" >

            <img className='ui avatar image' src={user} alt="user" onClick={handleClick} />
            <div className='content' onClick={handleClick}>
                    <div className='header'>
                        {name}</div>
                    <div>{email}</div>

            </div>
            <i style={{ float: 'right', color: 'red' }} className='trash alternate outline icon'
                onClick={() => props.clickHandler(id)}></i>

                <i
                onClick={updatepage}
                 style={{ float: 'right', color: 'blue', marginInline:'10px' }} className='edit alternate outline icon'
                ></i>
        </div>
    )
}

export default ContactCard