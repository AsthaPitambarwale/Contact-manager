import React, { useState } from "react";
import axios from "axios";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "" // lowercase
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      await axios.post("https://contact-manager-sirq.onrender.com/api/contacts", form);
      setForm({ name: "", email: "", phone: "", message: "" });
      refresh(); // refresh contact list
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Failed to submit. Please try again!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Details</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" disabled={!form.name || !form.phone}>
        Submit
      </button>
    </form>
  );
}
