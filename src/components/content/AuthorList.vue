<template>
  <list-item v-for="(item,index) in author " :key="index" :product="item"/>
</template>

<script>
import ListItem from "./ListItem.vue"
export default {
    components: {
        ListItem
    },
    props: {
        author: {
            type: Array
        }
    }

}
</script>

<style>

</style>