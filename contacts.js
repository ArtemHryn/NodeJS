const fs = require("fs").promises;
const path = require("path");
const { uid } = require("uid");

const contactsPath = path.resolve("db/contacts.json");

async function listContacts() {
  const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
  return data;
}

async function getContactById(contactId) {
  const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
  return data.find((contact) => contact.id === contactId);
}

async function removeContact(contactId) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    await fs.writeFile(
      contactsPath,
      JSON.stringify(data.filter((contact) => contact.id !== contactId)),
      "utf8"
    );
    console.log("contact has been removed");
  } catch (error) {
    console.log("oops, something wrong");
  }
}

async function addContact(name, email, phone) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    data.push({ id: uid(2), name, email, phone });
    await fs.writeFile(contactsPath, JSON.stringify(data), "utf8");
    console.log("contact has been added");
  } catch (error) {
    console.log("oops, something wrong");
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
