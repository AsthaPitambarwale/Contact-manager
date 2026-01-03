import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacts`);
      setContacts(res.data);
    } catch (err) {
      console.error("Backend not reachable:", err);
      alert("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <div className="layout">
        <div className="left">
          <ContactForm refresh={fetchContacts} />
        </div>
        <div className="right">
          {loading ? (
            <p>Loading contacts...</p>
          ) : (
            <ContactList contacts={contacts} refresh={fetchContacts} />
          )}
        </div>
      </div>
    </div>
  );
}
