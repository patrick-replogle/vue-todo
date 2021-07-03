import { createStore } from 'vuex';

import todosModule from './modules/todosModule';
import persistTodos from '../plugins/persistTodos';

const store = createStore({
  plugins: [persistTodos],
  modules: {
    todosModule
  }
});

export default store;
