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
  var httpData = {
    "name": "HTTP",
    "children": [{
      "name": "HTTPS",
      "children": [{
        "name": "加密算法",
        "id": "a1"
      }, {
        "name": "握手过程",
        "id": "a2"
      }, {
        "name": "签名验证",
        "id": "a3"
      }]
    }, {
      "name": "HTTP2",
      "children": [{
        "name": "头部压缩",
        "id": "b1"
      }, {
        "name": "多路复用",
        "id": "b2"
      }, {
        "name": "设置请求优先级",
        "id": "b3"
      }, {
        "name": "服务端推送",
        "id": "b4"
      }]
    }, {
      "name": "夸域问题",
      "children": [{
        "name": "夸域原因",
        "id": "c1"
      }, {
        "name": "解决夸域",
        "id": "c2"
      }]
    }, {
      "name": "HTTP缓存",
      "children": [{
        "name": "强缓存",
        "id": "d1"
      }, {
        "name": "协商缓存",
        "id": "d2"
      }, {
        "name": "代理缓存",
        "id": "d3"
      }]
    }]
  };

  var option = {
    series: [{
      type: 'tree',
      initialTreeDepth: -1,
      name: 'httpTree',
      data: [httpData],
      top: '5%',
      left: '20%',
      bottom: '2%',
      right: '15%',
      symbol: 'circle',
      symbolSize: 30,
      animationDurationUpdate: 750,
      itemStyle: {
        color: 'transparent',
        borderWidth: 0
      },
      label: { //标签样式
        color: "#fff",
        fontSize: 12,
        position: "inside",
        rotate: 0,
        padding: 5,
        backgroundColor: '#6E35FF'
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
  chart.on('click', function(params) {
    if (params.data.id){
      wx.redirectTo({
        url: '/pages/leaves/leaves?id=' + params.data.id
      })
    }
  });
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {}
});