const mutationTypes = new Set([
  'updateTodo',
  'addTodo',
  'removeTodo',
  'clearCompletedTodos',
  'toggleCompleted'
]);

const persistTodos = store => {
  store.subscribe((mutation, state) => {
    const type = mutation.type.split('/')[1];
    if (mutationTypes.has(type)) {
      try {
        window.localStorage.setItem(
          'todos',
          JSON.stringify(state.todosModule.todos)
        );
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  });
  store.subscribeAction({
    before: (action, state) => {
      console.log('before', action, state);
    },
    after: (action, state) => {
      console.log('after', action, state);
    }
  });
};

export default persistTodos;
