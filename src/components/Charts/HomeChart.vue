<template>
  <div class="homeChart">
    <div id="pie"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'homeChart',
  data() {
    return {
      chart: null,
        ourData: [{
            value: 30,
            name: 'Our Charge'
          },
          {
            value: 310,
            name: 'Your Return'
          }
        ]
    }
  },
  methods: {
    drawPie(id) {
      this.chart.setOption({
        pie: {
          title: {
            text: 'WealthEdge Low Fee portfolio',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Our Charge', 'Your Return']
          },
          series: [{
              name: 'WealthEdge',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: this.ourData,
              value: 30,
              name: 'Our Charge'
            },
            {
              value: 310,
              name: 'Your Return'
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.drawPie('pie')
    })
  }
}
</script>

<style lang="stylus" scoped>
#pie {
  height: 400px
}
</style>
