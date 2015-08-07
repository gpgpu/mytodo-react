var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TextInput = require('./TextInput');

var Header = React.createClass({
  onSave: function(text){
    if (text.trim()){
      TodoActions.create(text);
    }
  },
  render: function(){
    return(
      <header id="header">
        <h1>todos</h1>
        <TextInput id="new-todo" onSave={this.onSave} />
      </header>
    );
  }
});

module.exports = Header;
