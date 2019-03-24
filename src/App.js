import React, {Component} from 'react';

import './App.css';
import Todo from "./Todo";

let todosList = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

class App extends Component {

  state = {
    todos: todosList,
    hideToDoItems: false,
    newToDo: "",
  };

  selectRow = (id) => {
    this.setState({
      todos: this.state.todos.map(
        (todo) => todo.id === id ? {...todo, complete: !todo.complete} : todo
      )
    });
  };

  remainingItems = () => {
    return this.state.todos.filter(todo => !todo.complete).length
  };

  showHideBtnClick = () => {
    this.setState({hideToDoItems: !this.state.hideToDoItems});
  };

  enterNewTodo = (e) => {
    if (e.key === "Enter") {
      this.setState({
        todos: [...this.state.todos, {id: this.state.todos.length + 1, text: this.state.newToDo, complete: false}],
        newToDo: ""
      });
    }
  };

  render() {
    return <div className="App">
      <h1>Things to do</h1>
      <div className="todo-list">
        {this.state.todos.map((todo) =>
          this.state.hideToDoItems && todo.complete
            ?
            <div key={todo.id}/>
            :
            <Todo key={todo.id}
                  text={todo.text}
                  iscomplete={todo.complete}
                  onSelectFcu={() => this.selectRow(todo.id)}/>
        )}
      </div>
      <input type="text" placeholder="New todo"
             onChange={(e) => this.setState({newToDo: e.target.value})}
             onKeyDown={(e) => this.enterNewTodo(e)}
             value={this.state.newToDo}
      />
      <p/>
      <span>{this.remainingItems()} items remain</span>
      <p/>
      <button id="visibilityBtn" onClick={() => this.showHideBtnClick()}>
        {this.state.hideToDoItems ? "Show" : "Hide "}
        completed items
      </button>
    </div>;
  }
}

export default App;