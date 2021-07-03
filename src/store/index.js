import { createStore } from 'vuex';

import { initTodoState, updateLocalStorage } from '../functions';

const store = createStore({
  state: {
    todos: initTodoState(),
    isEditing: false,
    todoToEdit: {}
  },
  mutations: {
    updateTodo: (state, todo) => {
      state.todos = state.todos.map(t => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
      state.isEditing = false;
      state.todoToEdit = {};
      updateLocalStorage(state.todos);
    },
    addTodo: (state, todo) => {
      state.todos = [...state.todos, todo];
      updateLocalStorage(state.todos);
    },
    removeTodo: (state, todo) => {
      state.todos = state.todos.filter(t => t.id !== todo.id);
      updateLocalStorage(state.todos);
    },
    clearCompletedTodos: state => {
      state.todos = state.todos.filter(t => !t.completed);
      updateLocalStorage(state.todos);
    },
    toggleEdit(state, todo) {
      state.isEditing = true;
      state.todoToEdit = todo;
    },
    toggleCompleted(state, todo) {
      state.todos = state.todos.map(t => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      updateLocalStorage(state.todos);
    }
  },
  actions: {},
  modules: {}
});

export default store;