<template>
  <h1 class="mb-[20px]">数据统计</h1>
  <ul class="mb-[20px] grid grid-cols-4 gap-8">
    <li class="h-[120px] bg-white p-3 shadow-sm">
      <p class=" font-extrabold text-center leading-[2]">访客数量</p>
      <p class=" text-center">455</p>

    </li>
    <li class="h-[120px] bg-white p-3 shadow-sm">
      <p class=" font-extrabold text-center leading-[2]">用户数量</p>
      <p class=" text-center">455</p>

    </li>
    <li class="h-[120px] bg-white p-3 shadow-sm">
      <p class=" font-extrabold text-center leading-[2]">文章总数</p>
      <p class=" text-center">455</p>

    </li>
    <li class="h-[120px] bg-white p-3 shadow-sm">
      <p class=" font-extrabold text-center leading-[2]">留言总数</p>
      <p class=" text-center">455</p>

    </li>
   
  </ul>
  <div id="main" class="w-full h-[600px] p-[20px] bg-white shadow-md"></div>
</template>

<script >
import * as echarts from 'echarts';
export default {  
  data() {  
    return {  

    };  
  },  
  methods: {  
    
  }, 
  mounted() {  
    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom);
    let option;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['访客', '用户', '文章', '留言', '昨天'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: '数据对比',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data
      }
    ]
  });
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 3000);

option && myChart.setOption(option);

  }  
};  

</script>

<style>

</style>