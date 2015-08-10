var React = require('react');
var Header = require("./components/Header");
var MainSection = require("./components/MainSection");
var Footer = require('./components/Footer');
var TodoStore = require('./stores/TodoStore');

var TodoApp = React.createClass({
  getTodoState: function(){
    return {
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    };
  },
  onChange: function(){
    this.setState(this.getTodoState());
  },
  getInitialState: function(){
    return this.getTodoState();
  },
  componentDidMount: function(){
    TodoStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    TodoStore.removeListener(this.onChange);
  },
  render: function(){
    return (
      <div>
        <Header />
        <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }
});
React.render(
  <TodoApp />
  , document.getElementById("todoapp"));
