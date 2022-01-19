import React from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import '../App.css';





function App() {

  const contacts = [
    {
      id: "1",
      name: "Akshay",
      mnum: "997733",
      email: "abcd@gmail.com",
    },

    {
      id: "2",
      name: "Akshay2",
      mnum: "998822",
      email: "abcd2@gmail.com",
    },
    {
      id: "3",
      name: "Akshay3",
      mnum: "998833",
      email: "abcd3@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
