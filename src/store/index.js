import { createStore } from 'vuex';

import todosModule from './modules/todosModule';

const store = createStore({
  modules: {
    todosModule
  }
});

export default store;
