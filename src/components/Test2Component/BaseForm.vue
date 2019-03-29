<template>
  <el-form ref="formData" :model="data">
    <el-form-item
      :label="formEl.label"
      v-for="formEl in formEls"
      :key="formEl.key"
      :prop="formEl.required  ? formEl.value : ''"
      :rules="formEl.required ? {
        'required': true, 'message': 'Please input value!', 'trigger': 'handle-change'
      } : {}"
      >
      <template v-if="formEl.type === 'Dropdown'">
        <component
          :is="formEl.type"
          :formEl="formEl"
          :data.sync="data[formEl.value]"
          :options="formEl.options"
          @handle-change="handleChange(formEl.value, $event)" />
      </template>
      <template v-else>
        <component
          :is="formEl.type"
          :formEl="formEl"
          :data="data[formEl.value]"
          @handle-change="handleChange(formEl.value, $event)" />
      </template>
    </el-form-item>
    <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
  </el-form>
</template>
<script>
import BaseInput from '@/components/Test2Component/BaseInput.vue'
import Dropdown from '@/components/Test2Component/Dropdown.vue'
import DatePicker from '@/components/Test2Component/DatePicker.vue'

export default {
  name: 'BaseForm',
  components: {
    BaseInput,
    Dropdown,
    DatePicker
  },
  props: {
    formEls: Array,
    data: Object
  },
  methods: {
    handleChange (field, value) {
      this.data[field] = value
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('Submit success!')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  * {
    -webkit-font-smoothing: antialiased;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  .el-row {
    margin-bottom: 15px;
    text-align: left;
  }

  .el-select {
    display:block;
  }
</style>
