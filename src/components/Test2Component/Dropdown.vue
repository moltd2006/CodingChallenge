<template>
  <el-select v-model="value">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item"
    >
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    options: Array,
    data: Object
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
