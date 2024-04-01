// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: function (params) {
                      var total = 0;
                      var tooltipContent = params[0].name + '<br />';
                      for (var i = 0; i < params.length; i++) {
                          total += params[i].value;
                      }
                      for (var i = 0; i < params.length; i++) {
                          tooltipContent += params[i].seriesName + ' : ' + (params[i].value / total * 100).toFixed(2) + '%<br />';
                      }
                      return tooltipContent;
                  },
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['比逊','思默','津石','佐医']
    },
    series: [
      {
        name: '0 Day',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#90F3FC'
      },
        data: [152,44,35,8]
      },
      {
        name: '1-5 Days',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#71F18B'
      },
        data: [69,33,7,0]
      },
      {
        name: '6-15 Days',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#F4F47C'
      },
        data: [119,55,91,9]
      },
      {
        name: '16-30 Days',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#F1C064'
      },
        data: [70,67,11,56]
      },
      {
        name: '>30 Days',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#F04F4F'
      },
        data: [52,26,23,13]
      }
    ]
  };
  
        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === 'object') {
          myChart.setOption(option);
        }
    
        window.addEventListener('resize', myChart.resize);
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2.指定配置项和数据
      // 指定图表的配置项和数据
// There should not be negative values in rawData
const rawData = [
  [152,44,35,8],
  [69,33,7,0],
  [119,55,91,9],
  [70,67,11,56],
  [52,26,23,13]
];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50
};
const series = [
  '0 Day',
  '1-5 Days',
  '6-15 Days',
  '16-30 Days',
  '>30 Days'
].map((name, sid) => {
  const colors = ['#90F3FC', '#71F18B', '#F4F47C', '#F1C064', '#F04F4F'];
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: '60%',
    label: {
      show: true,
      formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
    },
    itemStyle: {
      color: colors[sid] // 使用颜色数组的颜色
    },
    data: rawData[sid].map((d, did) =>
      totalData[did] <= 0 ? 0 : d / totalData[did]
    )
  };
});
option = {
  legend: {
    selectedMode: false
  },
  grid,
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
    data: ['比逊', '思默', '津石', '佐医']
  },
  series
};
  
        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === 'object') {
              myChart.setOption(option);
          }
          window.onresize = function() {
              myChart.resize();
          };
})();

