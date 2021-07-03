<template>
  <div class="app">
    <Form />
    <TodoList />
  </div>
</template>

<script>
import Form from './components/Form.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    Form,
    TodoList
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 62.5%;
  margin: 0 auto;
  padding: 0;
  background-color: #6d6875;
}

.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
}
</style>
