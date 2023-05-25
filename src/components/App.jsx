import { Component } from "react";
import shortid from "shortid";



export class App extends Component {
  state = {
  name: '' ,
  number: '' ,
  filter: '',
  contacts: []
};

handleChange = evt => {
const {name, value} = evt.currentTarget
  this.setState ({
    [name]: value
  })
};

handleSubmit = evt => {
  evt.preventDefault();
  const {name, number} = this.state
  const newContact = {
    id: shortid.generate(),
    name: name,
    number: number,
  }

  this.setState (prevState => ({
    contacts: [...prevState.contacts, newContact],
    name:'',
    number: '',
  }))

};

handleFilter = evt => {
  const filterValue = evt.target.value
  this.setState({ filter: filterValue });
  this.contacts.filter(this.state.filter);

}


render() {


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor=""> Name
        <input type="text"
        name='name'
        value={this.state.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={this.handleChange}
         />
        </label>

        <label htmlFor=""> Number
        <input type="text"
        name="number"
        value={this.state.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create" />

      </form>
      <label htmlFor="">Filter
      <input type="text" name="filter" onChange={this.handleFilter} />
      </label>
   <ul>
    {this.state.contacts.map(contact => (
      <li key={contact.id}>
        <h4>{contact.name}</h4>
        <p>{contact.number}</p>
      </li>
    ))}

   </ul>
    </div>
  )
}

}