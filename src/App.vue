<template>
  <div id="app">
    <h1>TodoList</h1>
    <todo-create></todo-create>
    <todo-list :done="false"></todo-list>
    <todo-list :done="true"></todo-list>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TodoList from './components/TodoList.vue';
import TodoCreate from './components/TodoCreate.vue';
import {ACTION_TYPE} from './constant';
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    TodoList,
    TodoCreate
  }
})
export default class App extends Vue {
  mounted() {
     this.$store.dispatch(ACTION_TYPE.FETCH_TODO_LIST)
  }
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
