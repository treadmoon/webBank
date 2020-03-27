import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
let chart = null

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var data1 = {
    "name": "root",
    "children": [{
      "name": "a",
      "children": [{
        "name": "a1"
      }, {
        "name": "a2"
      }, {
        "name": "a3"
      }, {
        "name": "a4"
      }]
    }, {
      "name": "b",
      "children": [{
        "name": "b1"
      }, {
        "name": "b2"
      }, {
        "name": "b3"
      }, {
        "name": "b4"
      }]
    }, {
      "name": "c",
      "children": [{
        "id": "c01",
        "name": "c1"
      }]
    }, {
      "name": "d",
      "children": [{
        "name": "d1"
      }]
    }]
  };

  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: -1,

      name: 'tree1',

      data: [data1],

      top: '5%',
      left: '20%',
      bottom: '2%',
      right: '15%',
      symbol: 'circle',
      symbolSize: 28,
      animationDurationUpdate: 750,
      itemStyle: {
        borderWidth: 0,
        color: '#6E35FF'
      },
      label: { //标签样式
        color: "#f00",
        fontSize: 12,
        position: "inside",
        rotate: 0,
        backgroundColor: '#fff'

      },
      lineStyle: {
        width: 1,
        curveness: 0.3,
        shadowBlur: 2,
        color: '#6E35FF'
      }

    }]
  };

  chart.setOption(option);
  chart.on('click', function (params) {
    console.log('params', params);
    // wx.redirectTo({
    //   url: '/pages/leaves/leaves'
    // })
  });
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});