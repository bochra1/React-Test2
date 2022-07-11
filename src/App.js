import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Bochra from './Bochra';
import Addnom from './Addnom';
export default class App extends Component {
  state = {
    list : [
   { name: "Ryu", age: 30, post: "Student" , id: 1},
   { name: "Bochra", age: 23, post: "Student", id: 2},
   { name: "Yoshi", age: 26, post: "Student", id: 3}]
  }
  addnom= (newname) => {
    let list = [...this.state.list, newname];
    this.setState({
      list:list}); 
  }
  deletenom= (id) => {
    let list = this.state.list.filter(nom => {
      return nom.id !== id 
  });
  this.setState({
    list:list
  });}
  render() {
    return (
        <div className="app-content">
        <h1>My first React app</h1>
            <Bochra list={this.state.list} deletenom={this.deletenom}/>
            <Addnom addnom={this.addnom}/>
      </div>
    )
  }
}


