<template>
  <el-input
    :placeholder="formEl.placeholder"
    v-model="value"
  />
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    data: String,
    formEl: Object
  },
  computed: {
    value: {
      set (value) {
        this.$emit('handle-change', value)
      },
      get () {
        return this.data
      }
    }
  }
}
</script>
