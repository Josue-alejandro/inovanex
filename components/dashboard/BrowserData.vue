<template>
    <div>
    <Doughnut class="chart" :data="data" :options="options" />
    </div>
  </template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  import * as chartConfig from '../../ts/Doughnut.js'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Doughnut
    },
    data() {
      return chartConfig
    }
  }
  </script>

<style scoped>

</style>