<template>
  <el-date-picker
    class="date-picker"
    v-model="date"
    type="date"
    placeholder="Pick a day"
    value-format="timestamp">
  </el-date-picker>
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    data: String
  },
  computed: {
    date: {
      set (value) {
        this.$emit('handle-change', value.toString())
      },
      get () {
        return this.data
      }
    }
  }
}
</script>
<style scope>
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
</style>
