import React from "react";
import axios from "axios";

const API_URL = "https://contact-manager-dgpm.onrender.com";

export default function ContactList({ contacts, refresh }) {

  const deleteContact = async (id) => {
    try {
      console.log("Deleting ID:", id);
      await axios.delete(`${API_URL}/api/contacts/${id}`);
      refresh();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed");
    }
  };

  return (
    <>
      {/* Desktop Table */}
      <table className="desktop-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.message}</td>
              <td>
                <button onClick={() => deleteContact(c._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="mobile-cards">
        {contacts.map(c => (
          <div className="contact-card" key={c._id}>
            <h4>{c.name}</h4>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            <p className="msg">{c.message}</p>
            <button onClick={() => deleteContact(c._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
