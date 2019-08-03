import React, { Component } from 'react';

import '../styles/Form.css';
// import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
    formChecked:true,
    email:'',
    number:'',
  }
  toggleCheck = this.toggleCheck.bind(this);
  handleChange = this.handleChange.bind(this);

  toggleCheck(){
    this.setState(({ formChecked }) => ({ formChecked: !formChecked }));
  }

  handleChange({ currentTarget }) {
    const name = currentTarget.name;
    const value = currentTarget.value;
    this.setState({ [name]: value });
  }
  render() {
    const { formChecked } = this.state;
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input data-testid="name" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
        <input data-testid="email" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        <input data-testid="number" type="text" name="number" placeholder="Phone Number" value={this.state.number} onChange={this.handleChange}/>
        <div>
          <input data-testid="checked" type="checkbox" checked={formChecked} onChange={this.toggleCheck}/>
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
