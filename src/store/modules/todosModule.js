import { uuid } from 'vue-uuid';
import { initTodoState } from '../../functions';

export default {
  namespaced: true,
  state: { todos: initTodoState(), isEditing: false, todoToEdit: {} },
  getters: {
    isEditing(state) {
      return state.isEditing;
    },
    getTodoToEdit(state) {
      return state.todoToEdit;
    }
  },
  actions: {
    updateTodo({ commit }, payload) {
      commit('updateTodo', payload);
    },
    addTodo({ commit }, payload) {
      commit('addTodo', payload);
    },
    removeTodo({ commit }, payload) {
      commit('removeTodo', payload);
    },
    clearCompletedTodos({ commit }) {
      commit('clearCompletedTodos');
    },
    toggleEdit({ commit }, payload) {
      commit('toggleEdit', payload);
    },
    toggleCompleted({ commit }, payload) {
      commit('toggleCompleted', payload);
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
    },
    addTodo(state, todo) {
      todo.completed = false;
      todo.id = uuid.v4();
      state.todos = [...state.todos, todo];
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter(t => t.id !== todo.id);
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter(t => !t.completed);
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
    }
  }
};
