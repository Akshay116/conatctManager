import React,{useState} from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import '../App.css';


function App() {
  const [contacts,setContacts] = useState([]);

  const addContactHandler =(contact)=>{
    setContacts([...contacts,contact])

console.log("inside main");
  };

  
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
