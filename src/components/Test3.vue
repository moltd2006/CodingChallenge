<template>
  <div :style="{width: '800px', margin: '0 auto'}">
    <div class="row mb-1">
      <p class="col-sm-8">Render a dynamic form.</p>
      <p>More detailed in <strong>readme.md</strong> file</p>
    </div>
    <!--Your code goes here!-->
    <BaseForm :formEls="formStructure" :data="formData"/>
  </div>
</template>

<script>
/********
 * Render a form with the following requirements:
    - Use data from this end point localhost:8080/structure as the structure of this form. Keep in mind that this structure can be changed dynamically.
    - Use data from this end point localhost:8080/data as initial data.
    - Add validation (for fields those marked 'required' in structure)
 * API explaination:
  -
*******/
import BaseForm from '@/components/Test2Component/BaseForm.vue'
import service from '../../server/service'

const ownerUrl = 'http://localhost:3030/owner'
const modifierUrl = 'http://localhost:3030/modifier'
const structureUrl = 'http://localhost:3030/structure'
const formDataUrl = 'http://localhost:3030/data'

export default {
  components: {
    BaseForm
  },
  data () {
    return {
      formStructure: [],
      formData: {},
      dataDropdown: {}
    }
  },
  mounted () {
    service.get(ownerUrl).then(response => {
      this.dataDropdown.owner = response.items
    })
    service.get(modifierUrl).then(response => {
      this.dataDropdown.modifier = response.items
    })
    service.get(formDataUrl).then(response => {
      this.formData = response
    })
    setTimeout(() => {
      service.get(structureUrl).then(response => {
        this.formStructure = this.createDataStructure(response)
      })
    }, 500)
  },
  methods: {
    createDataStructure (data) {
      const input = 'BaseInput'
      const dropDown = 'Dropdown'
      const datePicker = 'DatePicker'
      return data.map(item => {
        switch (item.valueType.value) {
          case 'REFERENCE': {
            item.type = dropDown
            item.options = this.dataDropdown[item.value]
            break
          }
          case 'DATE': {
            item.type = datePicker
            break
          }
          default: {
            item.type = input
            break
          }
        }
        return item
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
</style>
