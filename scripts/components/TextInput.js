var React = require('react');

var ENTER_KEY_CODE = 13;

var TextInput = React.createClass({
  getInitialState: function(){
    return {
      value: this.props.value || ''
    };
  },

  save: function(){
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  onChange: function(event){
    this.setState({
      value: event.target.value
    });
  },

  onKeyDown: function(event){
    if (event.keyCode === ENTER_KEY_CODE){
      this.save();
    }
  },

  render: function(){
    return (
      <input placeholder="Enter text" autofocus
        className={this.props.className}
        id={this.props.id}
        onBlur={this.save}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value = {this.state.value}
      />
    );
  }

});

module.exports = TextInput;
