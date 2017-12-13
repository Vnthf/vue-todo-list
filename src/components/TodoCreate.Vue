<template>
  <div id="app">
      <input v-model.trim="value" v-on:keyup.enter="submit"/>
  </div>
</template>

<script lang="ts">
import {ACTION_TYPE} from '../constant';
import { Component, Vue } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

@Component
export default class TodoCreate extends Vue {
    @Action(ACTION_TYPE.ADD_TODO) addTodo: any

    value = ''
    submit() {
        if(!this.value) {
            return;
        }
        this.addTodo(this.value);
        this.value = '';
    }
}


    // methods: {
    //     submit() {
    //         if(!this.value) {
    //             return;
    //         }
    //         this[Constant.ADD_TODO](this.value);
    //         this.value = '';
    //     },
    //     ...mapActions([
    //         Constant.ADD_TODO
    //     ])
    // } 
</script>

<style lang="scss">

</style>
