import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    axios
      .get("https://contact-manager-sirq.onrender.com/api/contacts")
      .then(res => setContacts(res.data))
      .catch(err => console.error("Backend not running"));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact Manager</h2>

      <div className="layout">
        <div className="left">
          <ContactForm refresh={fetchContacts} />
        </div>

        <div className="right">
          <ContactList contacts={contacts} refresh={fetchContacts} />
        </div>
      </div>
    </div>
  );
}
