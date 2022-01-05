import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


import { todos } from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm("Are you sure you want to delete it ?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      })
    }
  }


  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2 p-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              {todo.description}
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark nav">
          <a className="text-white">
            <h1 className="title">Tasks</h1>
            <span className="badge badge-pill badge-light ml-2 count">
              {this.state.todos.length}
            </span>

          </a>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>

        <div className="container mb-4">
          <div className="col-md-12 mt-3 p-0">
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>
            <div className="row mt-4">{todos}
          </div>

        </div>
        <footer className="bg-light text-center text-lg-start">
  
        <div className="text-center p-3">
          © 2021 Copyright:
          <a className="text-dark" href="https://www.linkedin.com/in/andr%C3%A9s-bergara-526140200/" target="__blank"> Andycito</a>
        </div>
        
      </footer>
      </div>

    );

  }

}

export default App;
