<template>
  <div>
    todoApp このサイトをみてVue Test Utilisを勉強
    https://test-utils.vuejs.org/guide/essentials/a-crash-course.html

  </div>
    <h2>FocusLostForm</h2>
  <FocusLostForm @focus-lost="handleFocusLost" />
  <h2>ManyForm</h2>
  <ManyForm @formSubmit="handleManyFormSubmit" />
  <div v-if="submittedManyForm">
    <h3>ManyForm Submitted Data:</h3>
    <p>Email: {{ submittedManyForm.email }}</p>
    <p>Description: {{ submittedManyForm.description }}</p>
    <p>City: {{ submittedManyForm.city }}</p>
    <p>Subscribe: {{ submittedManyForm.subscribe }}</p>
    <p>Interval: {{ submittedManyForm.interval }}</p>
  </div>
  <h2>SimpleForm</h2>
  <SimpleForm @submit="handleFormSubmit" />
  <p>Submitted Email: {{ submittedEmail }}</p>
  <h2>CounterApp2</h2>
  <CounterApp2 @increment="handleIncrement" />
  <p>Count: {{ count }}</p>
  <h2>Nav</h2>
  <Nav :admin="true" />
  <h2>TodoAppVue</h2>
  <TodoAppVue />
  <h2>UserList</h2>
  <UserListVue />

</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TodoAppVue from './components/TodoApp.vue'
import UserListVue from './components/UserList.vue'
import Nav from './components/Nav.vue'
import CounterApp from './components/CounterApp.vue'
import CounterApp2 from './components/CounterApp2.vue';
import SimpleForm from './components/SimpleForm.vue';
import ManyForm from './components/ManyForm.vue';
import FocusLostForm from './components/FocusLostForm.vue';

const handleFocusLost = () => {
  alert('Input lost focus to button!');
};

const submittedManyForm = ref(null);

const handleManyFormSubmit = (formData) => {
  submittedManyForm.value = formData;
  console.log(formData);
};

const submittedEmail = ref('');

const handleFormSubmit = (email) => {
  submittedEmail.value = email;
};

const count = ref(0);

const handleIncrement = (newCount) => {
  count.value = newCount.count;
};

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
