var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem');

var MainSection = React.createClass({
  render: function(){
    if (Object.keys(this.props.allTodos).length < 1){
      return null;
    }
    var allTodos = this.props.allTodos;
    var todos = [];
    for (var key in allTodos){
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    return (
      <section id="main">
        <ul>{todos}</ul>
      </section>
    );
  }
});

module.exports = MainSection;
