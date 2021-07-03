<template>
  <div className="todoContainer">
    <div className="left">
      <p v-bind:style="textDecoration">
        {{ todo.details }}
      </p>
      <p>{{ handleDate() }}</p>
    </div>
    <div className="right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        class="icon"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        v-on:click="deleteTodo"
      >
        <path
          d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"
          fill="black"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="icon"
        v-on:click="toggleEdit"
      >
        <path
          d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
          fill="black"
        />
      </svg>
      <input
        type="checkbox"
        @change="toggleCompleted"
        :checked="todo.completed"
      />
    </div>
  </div>
</template>

<script>
import { generateDateStringForTodo } from '../functions';

export default {
  props: ['todo'],
  methods: {
    toggleCompleted() {
      this.$store.dispatch('toggleCompleted', this.todo);
    },
    toggleEdit() {
      this.$store.dispatch('toggleEdit', this.todo);
    },
    deleteTodo() {
      this.$store.dispatch('removeTodo', this.todo);
    },
    handleDate() {
      return generateDateStringForTodo(this.todo.date);
    }
  },
  computed: {
    textDecoration: function() {
      if (this.todo.completed) {
        return {
          'text-decoration': 'line-through'
        };
      } else {
        return {
          'text-decoration': 'none'
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.todoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  margin: 0.5%;
  background-color: #e5989b;
  color: black;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .left {
    width: 80%;

    p {
      font-size: 1.6rem;
      text-align: left;
      padding-left: 2%;
      font-weight: 100;
      text-decoration: 'none';
    }

    :first-child {
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 20%;

    @media (max-width: 600px) {
      justify-content: flex-start;
      width: 90%;
      padding-bottom: 20px;
      padding-left: 2%;
    }

    .icon {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      cursor: pointer;
      margin: 0 2%;
      width: 3rem;
      height: 3rem;
    }

    input {
      height: 22px;
      width: 22px;
      margin: 0 4%;
      @media (max-width: 600px) {
        margin-left: 3%;
      }
    }
  }
}
</style>
