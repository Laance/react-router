import React, { useState, useEffect } from 'react';
import Contacts from './Contacts';
import ContactList from './ContactList';


function MainContactsApp() {
  const [contacts, setContacts] = useState(Contacts);
  const [searchValue, setSearchValue] = useState('');
  
  const inputHandler = (e) => {
    setSearchValue(e.target.value);
    setContacts(Contacts);
  }
  useEffect(() => {
    setContacts(contacts.filter((contact) =>
    ((contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue))
      )));
    }
  ,[searchValue]);

  return <div className='mainContacts'>
            <div className="headerContacts">
              <h2>Contacts</h2>
            </div>
            <div>
              <input type="text" onChange={inputHandler}></input>
            </div>
            <div className='contacts'>
                <ContactList contactsDataList={contacts}/>
            </div>
        </div>
}


export default MainContactsApp;