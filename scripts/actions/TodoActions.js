var AppDispatcher = require("../dispatchers/AppDispatcher");
var TodoConstants = require("../constants/TodoConstants");

var TodoActions = {
  create: function(text){
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  },

  updateText: function(id, text){
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    })
  },

  destroy: function(id){
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    })
  },

  toggleComplete: function(todo){
    var id = todo.id;
    var actionType = todo.complete? TodoConstants.TODO_UNDO_COMPLETE: TodoConstants.TODO_COMPLETE;
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });

  }
};
module.exports = TodoActions;
