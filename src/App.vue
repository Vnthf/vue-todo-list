<template>
  <div id="app">
    <h1>TodoList</h1>
    <todo-create></todo-create>
    <todo-list :done="false"></todo-list>
    <todo-list :done="true"></todo-list>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import Constant from './constant';

export default {
  name: 'app',
  mounted() {
     this.$store.dispatch(Constant.FETCH_TODO_LIST)
  },
  components: {TodoList, TodoCreate}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
