import React from 'react';

const Contact = ({ phone, name, gender }) => {

    
    return (
        <div className="contact">
            <div className='data'> 
                <div className='name'>{name} </div>
                <div>{phone}</div>
                <div>{gender}</div>
                <hr />
            </div>
        </div>
    )
}

export default Contact;