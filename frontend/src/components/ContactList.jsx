import React from "react";
import axios from "axios";

export default function ContactList({ contacts, refresh }) {
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/contacts/${id}`);
      refresh();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete contact");
    }
  };

  return (
    <table>
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
        {contacts.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.message}</td>
            <td>
              <button onClick={() => deleteContact(c.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
