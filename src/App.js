import React from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import shortid from "shortid";
import Container from "./Components/Copntainer";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.conacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  inputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  nameInputId = shortid.generate();

  changeContacts = (name, number) => {
    console.log(name, number);
    if (this.verifyContact(name)) {
      alert("уже есть такой контакт");
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  verifyContact = (name) => {
    const { contacts } = this.state;
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };
  getNecessaryName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const getName = this.getNecessaryName();

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.changeContacts} />
          <h2>Contacts</h2>
          <Filter value={filter} handleChange={this.inputChange} />
          <ContactList
            listName={getName}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default App;
