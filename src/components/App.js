import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: uuidv4(),
        ...contact,
      },
    ]);
  };
  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (localContacts) setContacts(localContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  const removeContactHandler = (id) => {
    const newConatctList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newConatctList);
  };

  return (
    <div className="ui container">
      <BrowserRouter>
        <Routes>
          <Route
             path="/"
             element={
                <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
                />
             }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
         
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
