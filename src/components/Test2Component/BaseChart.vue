<template>
  <line-chart :data="data"></line-chart>
</template>
<script>
export default {
  name: 'BaseChart',
  props: {
    data: Array
  }
}
</script>
