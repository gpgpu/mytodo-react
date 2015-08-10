var AppDispatcher = require("../dispatchers/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var TodoConstants = require("../constants/TodoConstants");
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text){
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    text: text
  }
}

function destroy(id){
  delete _todos[id];
}

function update(id, updates){
  _todos[id] = assign({}, _todos[id], updates);
}

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll: function(){
    return _todos;
  },
  areAllComplete: function(){
    for (var id in _todos){
      if (!_todos[id].complete){
        return false;
      }
    }
    return true;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action){
  var text;
  switch (action.actionType){
    case TodoConstants.TODO_CREATE:
      text = action.text;
      if (text != ''){
        create(text);
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_COMPLETE:
      update(action.id, {complete: false});
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UNDO_COMPLETE:
      update(action.id, {complete: true});
      TodoStore.emitChange();
      break;
  }
});

module.exports = TodoStore;
