import React, {Component} from 'react';


const style = {
  todoComplete: {
    textDecoration: "line-through",
    color: '#ccc'
  },
  todoText: {
    marginLeft: '16px',
  }
};

export default class Todo extends Component {
  render() {
    return (
      <div className="todo" onClick={this.props.onSelectFcu}>
        <input type="checkbox" checked={this.props.iscomplete}/>
        <div style={this.props.iscomplete ? style.todoComplete : null}><span
          style={style.todoText}>{this.props.text}</span>
        </div>
      </div>
    )
  }
}
