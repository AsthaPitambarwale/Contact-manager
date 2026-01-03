const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST Contact
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.Message });
  }
});

// GET Contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// DELETE Contact (BONUS)
router.delete("/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
