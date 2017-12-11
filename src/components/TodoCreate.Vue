<template>
  <div id="app">
      <input v-model.trim="value" v-on:keyup.enter="submit"/>
  </div>
</template>

<script>
import Constant from '../constant';
import {mapActions} from 'vuex'

export default {
    name: 'todo-create',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        submit() {
            if(!this.value) {
                return;
            }
            this[Constant.ADD_TODO](this.value);
            this.value = '';
        },
        ...mapActions([
            Constant.ADD_TODO
        ])
    } 
}
</script>

<style lang="scss">

</style>
