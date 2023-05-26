import React, { Component } from "react";
import shortid from "shortid";
import { createForm } from "./Form/Form";

import { FilterLabel } from "./Filter/Filter";

import { PhoneBook } from "./phonebook/PhoneBook"; 


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
    const { name, number, contacts } = this.state;
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if(existingContact) {
      alert ('this contact already exists')
      return;
    }

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

  handleFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== id;
      }),
    }));
  };

  render() {
    const { name, number } = this.state;
    const filteredContacts = this.getFilteredContacts();
    

    return (
      <div>
        {createForm(this.handleChange, this.handleSubmit, name, number)}
        <FilterLabel handleFilter={this.handleFilter} />
          <PhoneBook contacts={filteredContacts} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
