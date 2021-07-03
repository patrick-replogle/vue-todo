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
          />
        </label>
      </div>
      <div>
        <label
          >Due Date
          <input id="date" type="date" v-model="date" />
        </label>
      </div>
    </div>
    <div className="btnContainer">
      <button type="submit">Submit</button>
      <button v-on:click="clearForm" type="button">Cancel</button>
      <button v-on:click="clearCompletedTodos" type="button">
        Clear Completed Todos
      </button>
    </div>
  </form>
</template>

<script>
import { uuid } from 'vue-uuid';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      details: '',
      date: ''
    };
  },
  methods: {
    onSubmit() {
      if (!this.details || !this.date) return;

      const todo = {
        details: this.details,
        date: this.date,
        id: this.$store.state.isEditing
          ? this.$store.state.todoToEdit.id
          : uuid.v4(),
        completed: this.$store.state.isEditing
          ? this.$store.state.todoToEdit.completed
          : false
      };
      if (this.$store.state.isEditing) {
        this.$store.commit('updateTodo', todo);
      } else {
        this.$store.commit('addTodo', todo);
      }
      this.clearForm();
    },
    clearCompletedTodos() {
      this.$store.commit('clearCompletedTodos');
    },
    clearForm() {
      this.details = '';
      this.date = '';
    }
  },
  computed: mapState(['isEditing']),
  watch: {
    isEditing(isEditMode) {
      if (isEditMode) {
        this.details = this.$store.state.todoToEdit.details;
        this.date = this.$store.state.todoToEdit.date;
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
