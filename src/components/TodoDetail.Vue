<template>
    <div>
      아앙
    </div>
</template>

<script lang="ts">
import {GETTER_TYPE} from '../constant';
import { Component, Vue } from 'vue-property-decorator'

export default class TodoDetail extends Vue {
    mounted() {
        console.log(this.$route.params.id);
        console.log(this.$store.getters[GETTER_TYPE.GET_TODO](this.$route.params.id))
    }
}
</script>

<style lang="scss">


</style>
