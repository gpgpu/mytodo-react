var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TextInput = require('./TextInput');
var classNames = require('classnames');

var TodoItem = React.createClass({
  getInitialState: function(){
    return {
      isEditing: false
    };
  },
  onToggleComplete: function(){
    TodoActions.toggleComplete(this.props.todo);
  },
  onDoubleClick: function(){
    this.setState({isEditing: true});
  },
  onSave: function(){
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },
  onDestroy: function(){
    TodoActions.destroy(this.props.todo.id);
  },
  render: function(){
    var todo = this.props.todo;
    var input;

    if (this.state.isEditing){
      input = <TextInput className="edit" onSave={this.onSave} value={todo.text} />;
    }

    return (
      <li className={classNames({'completed': todo.complete, 'editing': this.state.isEditing})} key={todo.id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.complete} onChange={this.onToggleComplete} />
          <label onDoubleClick = {this.onDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={this.onDestroy} />
        </div>
      </li>

    );
  }
});

module.exports = TodoItem;
