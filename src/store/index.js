import { createStore } from 'vuex';
import { uuid } from 'vue-uuid';

import { initTodoState, updateLocalStorage } from '../functions';

const store = createStore({
  state: {
    todos: initTodoState(),
    isEditing: false,
    todoToEdit: {}
  },
  getters: {
    isEditing(state) {
      return state.isEditing;
    }
  },
  actions: {
    updateTodo(context, todo) {
      context.commit('updateTodo', todo);
    },
    addTodo(context, todo) {
      context.commit('addTodo', todo);
    },
    removeTodo(context, todo) {
      context.commit('removeTodo', todo);
    },
    clearCompletedTodos(context) {
      context.commit('clearCompletedTodos');
    },
    toggleEdit(context, todo) {
      context.commit('toggleEdit', todo);
    },
    toggleCompleted(context, todo) {
      context.commit('toggleCompleted', todo);
    }
  },
  mutations: {
    updateTodo(state, todo) {
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
    addTodo(state, todo) {
      todo.completed = false;
      todo.id = uuid.v4();
      state.todos = [...state.todos, todo];
      updateLocalStorage(state.todos);
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter(t => t.id !== todo.id);
      updateLocalStorage(state.todos);
    },
    clearCompletedTodos(state) {
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
  modules: {}
});

export default store;
