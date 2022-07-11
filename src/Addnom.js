import React, { Component } from 'react'

export default class Addnom extends Component {
    state = {
        name: null,
        age: null,
        post: null
      }
      handleChange = (e) => {
        // console.log(e.target.id, e.target.value);
        this.setState({
          [e.target.id]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
this.props.addnom(this.state);      }
  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="post">Post:</label>
          <input type="text"id="post" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

