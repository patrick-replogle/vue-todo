<template>
  <div class="todoListContainer" v-for="todo in todos" :key="todo.id">
    <Todo v-bind:todo="todo" />
  </div>
</template>

<script>
import Todo from './Todo';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('todosModule');

export default {
  name: 'TodoList',
  components: {
    Todo
  },
  computed: {
    ...mapState(['todos'])
  }
};
</script>

<style lang="scss" scoped>
.todoListContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  &:last-child {
    margin-bottom: 20px;
  }
}
</style>
