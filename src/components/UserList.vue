
<template>
    <div>
      <h1>ユーザーリスト</h1>
      <ul>
        <li v-for="user in users" :key="user">{{ user }}</li>
      </ul>
      <input v-model="newUser" placeholder="新しいユーザー名" />
      <button @click="addUser">追加</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: ['Alice', 'Bob'],
        newUser: '',
      };
    },
    methods: {
      addUser() {
        if (this.newUser.trim()) {
          this.users.push(this.newUser.trim());
          this.newUser = '';
        }
      },
    },
  };
  </script>
  