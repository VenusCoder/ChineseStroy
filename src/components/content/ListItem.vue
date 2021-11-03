<template>
  <dl >
      <dt>{{product.name}}</dt>
      <dd></dd>
  </dl>
</template>

<script>
export default {

    props: {
         product: {
            type: Object
        }
    }

}
</script>

<style>

</style>