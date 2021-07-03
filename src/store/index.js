import { createStore } from 'vuex';
// import { uuid } from 'vue-uuid';

// import { initTodoState, updateLocalStorage } from '../functions';

// const store = createStore({
//   state: {
//     todos: initTodoState(),
//     isEditing: false,
//     todoToEdit: {}
//   },
//   getters: {
//     isEditing(state) {
//       return state.isEditing;
//     }
//   },
//   actions: {
//     updateTodo({ commit }, todo) {
//       commit('updateTodo', todo);
//     },
//     addTodo({ commit }, todo) {
//       commit('addTodo', todo);
//     },
//     removeTodo({ commit }, todo) {
//       commit('removeTodo', todo);
//     },
//     clearCompletedTodos({ commit }) {
//       commit('clearCompletedTodos');
//     },
//     toggleEdit({ commit }, todo) {
//       commit('toggleEdit', todo);
//     },
//     toggleCompleted({ commit }, todo) {
//       commit('toggleCompleted', todo);
//     }
//   },
//   mutations: {
//     updateTodo(state, todo) {
//       state.todos = state.todos.map(t => {
//         if (t.id === todo.id) {
//           return todo;
//         }
//         return t;
//       });
//       state.isEditing = false;
//       state.todoToEdit = {};
//       updateLocalStorage(state.todos);
//     },
//     addTodo(state, todo) {
//       todo.completed = false;
//       todo.id = uuid.v4();
//       state.todos = [...state.todos, todo];
//       updateLocalStorage(state.todos);
//     },
//     removeTodo(state, todo) {
//       state.todos = state.todos.filter(t => t.id !== todo.id);
//       updateLocalStorage(state.todos);
//     },
//     clearCompletedTodos(state) {
//       state.todos = state.todos.filter(t => !t.completed);
//       updateLocalStorage(state.todos);
//     },
//     toggleEdit(state, todo) {
//       state.isEditing = true;
//       state.todoToEdit = todo;
//     },
//     toggleCompleted(state, todo) {
//       state.todos = state.todos.map(t => {
//         if (t.id === todo.id) {
//           return { ...t, completed: !t.completed };
//         }
//         return t;
//       });
//       updateLocalStorage(state.todos);
//     }
//   },
//   modules: {}
// });

import todosModule from './modules/todosModule';

const store = createStore({
  modules: {
    todosModule
  }
});

export default store;
