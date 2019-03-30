<template>
  <div :style="{width: '800px', margin: '0 auto'}">
    <h4>Render a datatable using test4.json</h4>
    <p>Note: Calculate Average value, Total value </p>
    <BaseChart :data="chart" />
    <table class="table ui-accordion" style="width: 400px; margin: 20px 0;">
      <caption></caption>
      <colgroup>
        <col style="width:10px">
        <col style="width:50px;">
        <col style="width:30px">
      </colgroup>
      <thead>
      <tr>
        <th>Team</th>
        <th>Total</th>
        <th>Average</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in chart" :key="item.index">
          <td>{{item.name}}</td>
          <td>{{item.data.Total}}</td>
          <td>{{item.data.Average}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from './JsonFiles/test4'
import BaseChart from '@/components/Test2Component/BaseChart'
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
