import React, { Component } from "react";
import shortid from "shortid";

export class App extends Component {
  state = {
    name: "",
    number: "",
    filter: "",
    contacts: [],
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  handleFilter = (evt) => {
    const filterValue = evt.target.value;
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  HandleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== id;
      }),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="">
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Create" />
        </form>
        <label htmlFor="">
          Filter for name
          <input type="text" name="filter" onChange={this.handleFilter} />
        </label>
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <h4>{contact.name}</h4>
              <p>{contact.number}</p>
              <button type="button" name="deleteNum" onClick={() => this.HandleDelete(contact.id)}> Delete contact</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}