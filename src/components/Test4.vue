<template>
  <div :style="{width: '800px', margin: '0 auto'}">
    <h4>Render a datatable using test4.json</h4>
    <p>Note: Calculate Average value, Total value </p>
    <BaseChart :data="chart" />
  </div>
</template>

<script>
import data from './JsonFiles/test4'
import BaseChart from '@/components/Test2Component/BaseChart'
console.log(data)
export default {
  name: 'Test4',
  components: {
    BaseChart
  },
  data () {
    return {
      dataChart: data
    }
  },
  computed: {
    chart () {
      if (this.dataChart) {
        return this.dataChart.map(item => {
          item.data.Total = item.data.Teamwork + item.data.Benefit + item.data.Career
          item.data.Average = Math.round(item.data.Total / 3)
          return item
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
