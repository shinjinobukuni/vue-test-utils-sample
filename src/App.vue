<template>
  <div>
    todoApp このサイトをみてVue Test Utilisを勉強
    https://test-utils.vuejs.org/guide/essentials/a-crash-course.html

  </div>
  <CounterApp2 @increment="handleIncrement"/>
  <p>Count: {{ count }}</p>
  <Nav :admin="true"/>
  <TodoAppVue />
  <div>
    UserList
  </div>
  <UserListVue/>

</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TodoAppVue from './components/TodoApp.vue'
import UserListVue from './components/UserList.vue'
import Nav from './components/Nav.vue'
import CounterApp from './components/CounterApp.vue'
import CounterApp2 from './components/CounterApp2.vue';

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
