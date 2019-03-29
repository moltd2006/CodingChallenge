<template>
  <div :style="{width: '800px', margin: '0 auto'}">
    <div class="row mb-1">
      <p class="col-sm-8">Implement <strong>input</strong>, <strong>datepicker</strong>, and <strong>select/dropdown</strong> knowing that these component get initial data from server and be able to retrieve new data as user change it.</p>
      <p>Use <a href="http://element.eleme.io/?ref=madewithvuejs.com#/en-US" target="_blank">this</a> library</p>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div>
          <label class="label">Input</label>
          <BaseInput
            :data="inputData"
            :formEl="formEl"
            @handle-change="handleChangeDataInput"
          />
          <p>v-model: {{inputData}}</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div style="text-align: left">
        <label class="label">Dropdown</label>
          <Dropdown
            :data="selectItem"
            :options="optionsDataOwner"
            @handle-change="handleChangeDataSelect" />
          <p>v-model: {{selectItem}}</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <label class="label">DatePicker</label>
          <DatePicker
            :data="dateData"
            @handle-change="handleChangeDataPicker" />
            <p>v-model: {{dateData}}</p>
        </div>
      </el-col>
    </el-row>
    <div class="row mb-1">
      <!-- Your components goes here! @change="handleChangeData"-->
    </div>
  </div>
</template>

<script>
import dataOwner from '../../server/data/owner'
import BaseInput from '@/components/Test2Component/BaseInput.vue'
import Dropdown from '@/components/Test2Component/Dropdown.vue'
import DatePicker from '@/components/Test2Component/DatePicker.vue'

export default {
  name: 'Test2',
  components: {
    BaseInput,
    Dropdown,
    DatePicker
  },
  data () {
    return {
      inputData: '',
      dateData: '',
      selectItem: {},
      formEl: {},
      optionsDataOwner: dataOwner.items

    }
  },
  mounted () {
    setTimeout(() => {
      this.inputData = 'This is initial data.'
      this.dateData = '1551693570892'
      this.formEl = {
        'placeholder': 'This is initial data.'
      }
    }, 900)
  },
  methods: {
    handleChangeDataInput (newValue) {
      this.inputData = newValue
    },
    handleChangeDataSelect (newValue) {
      this.selectItem = newValue
    },
    handleChangeDataPicker (newValue) {
      this.dateData = newValue
    }
  }
}
</script>

<style scoped>
  .mb-1, .my-1 {
    margin-bottom: 4px!important;
    margin-bottom: .25rem!important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-sm-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%;
   }
  .col-sm-2, .col-sm-10 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .pt-1, .py-1 {
    padding-top: 4px!important;
    padding-top: .25rem!important;
  }
  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  .progress {
    height: 16px;
    height: 1rem;
    overflow: hidden;
    font-size: 12px;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
  }
  .progress-bar {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #007bff;
    transition: width .6s ease;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  * {
    -webkit-font-smoothing: antialiased;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  .label {
    display: block;
    text-align: left;
    margin-bottom: 10px;
  }

</style>
