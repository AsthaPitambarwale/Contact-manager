import React, { useState } from "react";
import axios from "axios";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    Message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();
    await axios.post("${process.env.REACT_APP_API_URL}/api/contacts", form);
    setForm({ name: "", email: "", phone: "", Message: "" });
    refresh();
  };

  return (
    <form>
      <h2>Enter Your Details</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <textarea name="Message" placeholder="Message" value={form.Message} onChange={handleChange} />
      <button onClick={submit} disabled={!form.name || !form.phone}>
        Submit
      </button>
    </form>
  );
}
