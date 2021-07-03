<template>
  <form @submit.prevent="onSubmit">
    <div className="inputContainer">
      <div>
        <label
          >Details
          <input
            id="details"
            type="text"
            placeholder="...add a todo"
            v-model="details"
            required
          />
        </label>
      </div>
      <div>
        <label
          >Due Date
          <input id="date" type="date" v-model="date" required />
        </label>
      </div>
    </div>
    <div className="btnContainer">
      <button type="submit">Submit</button>
      <button v-on:click="clearForm" type="button">Cancel</button>
      <button v-on:click="deleteCompletedTodos" type="button">
        Clear Completed Todos
      </button>
    </div>
  </form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
  'todosModule'
);

export default {
  name: 'Form',
  data() {
    return {
      details: '',
      date: ''
    };
  },
  methods: {
    ...mapActions(['updateTodo', 'addTodo', 'clearCompletedTodos']),
    ...mapGetters(['getTodoToEdit']),
    onSubmit() {
      if (!this.details || !this.date) return;

      const todo = { details: this.details, date: this.date };

      if (this.$store.state.todosModule.isEditing) {
        const editingTodo = this.getTodoToEdit();
        todo.id = editingTodo.id;
        todo.completed = editingTodo.completed;
        this.updateTodo(todo);
      } else {
        this.addTodo(todo);
      }
      this.clearForm();
    },
    deleteCompletedTodos() {
      this.clearCompletedTodos();
    },
    clearForm() {
      this.details = '';
      this.date = '';
    }
  },
  computed: {
    ...mapState(['isEditing'])
  },
  watch: {
    isEditing(isEditMode) {
      if (isEditMode) {
        const editingtodo = this.getTodoToEdit();
        this.details = editingtodo.details;
        this.date = editingtodo.date;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-size: 1.6rem;
  margin-top: 4%;
  margin-bottom: 0.5%;
  background-color: #e5989b;
  padding: 40px;
  border-radius: 6px;

  .inputContainer {
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    div {
      width: 50%;
      margin: 1%;
      display: flex;
      flex-direction: column;

      @media (max-width: 700px) {
        width: 100%;
      }

      label {
        font-weight: 700;
        font-size: 1.8rem;
      }

      input {
        border-radius: 6px;
        padding: 14px;
        margin: 5px 0;
        border: 1.5px solid gray;
        height: 50px;
        font-size: 1.6rem;
        min-width: 100%;
      }

      input[type='date'] {
        display: block;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
      }
    }
  }

  .btnContainer {
    display: flex;
    width: 100%;
    justify-content: center;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    button {
      font-family: 'Roboto', sans-serif;
      border-radius: 6px;
      padding: 10px 20px;
      border: 2px solid #6d6875;
      margin: 5px 1%;
      font-size: 1.8rem;
      font-weight: 500;
      background: #6d6875;
      color: white;

      @media (max-width: 700px) {
        width: 100%;
        font-size: 1.6rem;
        margin: 5px 0;
      }

      @media (max-width: 400px) {
        font-size: 1.2rem;
      }

      &:hover {
        background: white;
        color: #6d6875;
      }
    }
  }
}
</style>
