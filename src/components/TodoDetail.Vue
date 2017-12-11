<template>
    <div>
      아앙
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Constant from '../constant';

export default {
    name: 'todo-detail',
    mounted() {
        console.log(this.$route.params.id);
        console.log(this.$store.getters[Constant.GET_TODO](this.$route.params.id))
    }
}
</script>

<style lang="scss">


</style>
