var myChartData = function(){


  /* 
     点击切换预览图
    =======
  /* 
  图标：具体数据需要写不同的myChart ＋ option
  */
  var token = localStorage.getItem("token");
  var chartsData = new Object();
  var BackKey = new Object();
  // var BueKey     = new Object();
  var BueSafeKey = new Object();
  var EquKey = new Object();
  var EviKey = new Object();
  var LinkKey = new Object();
  var NetKey = new Object();
  // var ProKey     = new Object();
  var SZTVPG = new Object();
  var SafeKey = new Object();
  var ValKey = new Object();
  var WarnKey = new Object();
  $.ajax({
    url: '/api/common/taskAll?token=' + token,
    'dataType': 'JSON',
    'type': 'POST',
    'data': { 'taskInstanceId': taskAll.taskInstanceId },
    success: function success(data) {
      if (data.code == 0) {
        var _BackKey, _BueSafeKey, _EquKey, _EviKey, _LinkKey, _NetKey, _SZTVPG, _SafeKey, _ValKey, _WarnKey;

        var lists = new Object();
        lists = data.object;
        var obj = new Object();
        console.log(lists.link);
        for (var p in lists.link) {
          var charts = p;
          var q = p;
          var k = new Object();
          charts = new Object();
          charts.name = [];
          charts.score = [];
          for (var s in lists.link[p].links) {

            charts.name.push(lists.link[p].links[s].name);
            //value 用于柱状图显示分数及长度
            charts.score.push({
              value: taskAll.lists.link[p].links[s].score,
              name: taskAll.lists.link[p].links[s].name,
              suggest: taskAll.lists.link[p].links[s].suggest,
              summary: taskAll.lists.link[p].links[s].summary,
              score:taskAll.lists.link[p].links[s].score,
              description: taskAll.lists.link[p].links[s].description,
              taskInstanceId: taskAll.taskInstanceId,
              id: taskAll.lists.link[p].links[s].id
            });
            k = Object.assign(charts);
          }
          obj[q] = Object.assign(k);
        }

        chartsData = obj;
        BackKey = obj.BackKey;
        // BueKey     = obj.BueKey;
        BueSafeKey = obj.BueSafeKey;
        EquKey = obj.EquKey;
        EviKey = obj.EviKey;
        LinkKey = obj.LinkKey;
        NetKey = obj.NetKey;
        // ProKey     = obj.ProKey;
        SZTVPG = obj.SZTVPG;
        SafeKey = obj.SafeKey;
        ValKey = obj.ValKey;
        WarnKey = obj.WarnKey;

        var myChart1 = echarts.init(document.getElementById('echarts-box1-1'))
        // ,myChart2 = echarts.init(document.getElementById('echarts-box2-1'))
        ,
            myChart3 = echarts.init(document.getElementById('echarts-box3-1')),
            myChart4 = echarts.init(document.getElementById('echarts-box4-1')),
            myChart5 = echarts.init(document.getElementById('echarts-box5-1')),
            myChart6 = echarts.init(document.getElementById('echarts-box6-1')),
            myChart7 = echarts.init(document.getElementById('echarts-box7-1')),
            myChart8 = echarts.init(document.getElementById('echarts-box8-1')),
            myChart9 = echarts.init(document.getElementById('echarts-box9-1'))
        //,myChart10 = echarts.init(document.getElementById('echarts-box10-1'))
        ,
            myChart11 = echarts.init(document.getElementById('echarts-box11-1')),
            myChart12 = echarts.init(document.getElementById('echarts-box12-1')),
            myChart01 = echarts.init(document.getElementById('echarts-box1-2'))
        // ,myChart02 = echarts.init(document.getElementById('echarts-box2-2'))
        ,
            myChart03 = echarts.init(document.getElementById('echarts-box3-2')),
            myChart04 = echarts.init(document.getElementById('echarts-box4-2')),
            myChart05 = echarts.init(document.getElementById('echarts-box5-2')),
            myChart06 = echarts.init(document.getElementById('echarts-box6-2')),
            myChart07 = echarts.init(document.getElementById('echarts-box7-2')),
            myChart08 = echarts.init(document.getElementById('echarts-box8-2')),
            myChart09 = echarts.init(document.getElementById('echarts-box9-2'))
        //,myChart010 = echarts.init(document.getElementById('echarts-box10-2'))
        ,
            myChart011 = echarts.init(document.getElementById('echarts-box11-2')),
            myChart012 = echarts.init(document.getElementById('echarts-box12-2')),
            BackKey1 = (_BackKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: BackKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_BackKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_BackKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_BackKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: BackKey.score
        }]), _BackKey),
            BackKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: BackKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: BackKey.score
          }]
        },

        // BueKey1 = {
        //  color: ['#3398DB'],
        //  tooltip : {
        //    trigger: 'axis',
        //    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //    }
        //  },
        //  grid: {
        //    left: '3%',
        //    right: '4%',
        //    bottom: '3%',
        //    containLabel: true
        //  },
        //  xAxis : [
        //    {
        //      type : 'category',
        //      data : BueKey.name,
        //      axisTick: {
        //        alignWithLabel: true
        //      },
        //      axisLabel: {// x轴文字的倾斜角度
        //        interval: 0,
        //        rotate: -30
        //      }
        //    }
        //  ],
        //  grid: {  // x轴文字的高度
        //        y2: 100  
        //      },  
        //  yAxis : [
        //    {
        //      type : 'value'
        //    }
        //  ],
        //  series : [
        //    {
        //      name:'评分',
        //      type:'bar',
        //      barWidth: '40px',
        //      z: 3,
        //      label: {
        //        normal: {
        //          position: 'top',
        //          show: true
        //        }
        //      },
        //      data:BueKey.score
        //    }
        //  ]
        // },
        // BueKey2 = {
        //  tooltip : {
        //    trigger: 'axis',
        //    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //    }
        //  },
        //  grid: [{
        //    top: 50,
        //    bottom: 40,
        //    left: 130,
        //  }],
        //   xAxis: [{
        //    type: 'value',
        //    max: 100,
        //    splitLine: {
        //      show: false
        //    }
        //  }],
        //  yAxis: [{
        //    type: 'category',
        //    data: BueKey.name,
        //    axisLabel: {
        //      interval: 0,
        //      rotate: 30
        //    },
        //    splitLine: {
        //      show: false
        //    }
        //  }],
        //  series: [{
        //    type: 'bar',
        //    z: 3,
        //    label: {
        //      normal: {
        //        position: 'right',
        //        show: true
        //      }
        //    },
        //    barWidth: '40px',
        //    data:BueKey.score
        //  }]
        // },
        BueSafeKey1 = (_BueSafeKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: BueSafeKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_BueSafeKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_BueSafeKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_BueSafeKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: BueSafeKey.score
        }]), _BueSafeKey),
            BueSafeKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: BueSafeKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: BueSafeKey.score
          }]
        },
            EquKey1 = (_EquKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: EquKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_EquKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_EquKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_EquKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: EquKey.score
        }]), _EquKey),
            EquKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: EquKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: EquKey.score
          }]
        },
            EviKey1 = (_EviKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: EviKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_EviKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_EviKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_EviKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: EviKey.score
        }]), _EviKey),
            EviKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: EviKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: EviKey.score
          }]
        },
            LinkKey1 = (_LinkKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: LinkKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_LinkKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_LinkKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_LinkKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: LinkKey.score
        }]), _LinkKey),
            LinkKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: LinkKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: LinkKey.score
          }]
        },
            NetKey1 = (_NetKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: NetKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_NetKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_NetKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_NetKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: NetKey.score
        }]), _NetKey),
            NetKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: NetKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: NetKey.score
          }]
        },

        // ProKey1 = {
        //  color: ['#3398DB'],
        //  tooltip : {
        //    trigger: 'axis',
        //    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //    }
        //  },
        //  grid: {
        //    left: '3%',
        //    right: '4%',
        //    bottom: '3%',
        //    containLabel: true
        //  },
        //  xAxis : [
        //    {
        //      type : 'category',
        //      data : ProKey.name,
        //      axisTick: {
        //        alignWithLabel: true
        //      },
        //      axisLabel: {// x轴文字的倾斜角度
        //        interval: 0,
        //        rotate: -30
        //      }
        //    }
        //  ],
        //  grid: {  // x轴文字的高度
        //        y2: 100  
        //      },  
        //  yAxis : [
        //    {
        //      type : 'value'
        //    }
        //  ],
        //  series : [
        //    {
        //      name:'评分',
        //      type:'bar',
        //      barWidth: '40px',
        //      z: 3,
        //      label: {
        //        normal: {
        //          position: 'top',
        //          show: true
        //        }
        //      },
        //      data:ProKey.score
        //    }
        //  ]
        // },
        // ProKey2 = {
        //  tooltip : {
        //    trigger: 'axis',
        //    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //    }
        //  },
        //  grid: [{
        //    top: 50,
        //    bottom: 40,
        //    left: 130,
        //  }],
        //   xAxis: [{
        //    type: 'value',
        //    max: 100,
        //    splitLine: {
        //      show: false
        //    }
        //  }],
        //  yAxis: [{
        //    type: 'category',
        //    data: ProKey.name,
        //    axisLabel: {
        //      interval: 0,
        //      rotate: 30
        //    },
        //    splitLine: {
        //      show: false
        //    }
        //  }],
        //  series: [{
        //    type: 'bar',
        //    z: 3,
        //    label: {
        //      normal: {
        //        position: 'right',
        //        show: true
        //      }
        //    },
        //    barWidth: '40px',
        //    data:ProKey.score
        //  }]
        // },
        SZTVPG1 = (_SZTVPG = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: SZTVPG.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_SZTVPG, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_SZTVPG, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_SZTVPG, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: SZTVPG.score
        }]), _SZTVPG),
            SZTVPG2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: SZTVPG.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: SZTVPG.score
          }]
        },
            SafeKey1 = (_SafeKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: SafeKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_SafeKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_SafeKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_SafeKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: SafeKey.score
        }]), _SafeKey),
            SafeKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: SafeKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: SafeKey.score
          }]
        },
            ValKey1 = (_ValKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ValKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_ValKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_ValKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_ValKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: ValKey.score
        }]), _ValKey),
            ValKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: ValKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: ValKey.score
          }]
        },
            WarnKey1 = (_WarnKey = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: WarnKey.name,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: { // x轴文字的倾斜角度
              interval: 0,
              rotate: -30
            }
          }]
        }, _defineProperty(_WarnKey, 'grid', { // x轴文字的高度
          y2: 100
        }), _defineProperty(_WarnKey, 'yAxis', [{
          type: 'value'
        }]), _defineProperty(_WarnKey, 'series', [{
          name: '评分',
          type: 'bar',
          barWidth: '40px',
          z: 3,
          label: {
            normal: {
              position: 'top',
              show: true
            }
          },
          data: WarnKey.score
        }]), _WarnKey),
            WarnKey2 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [{
            top: 50,
            bottom: 40,
            left: 130
          }],
          xAxis: [{
            type: 'value',
            max: 100,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: WarnKey.name,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            z: 3,
            label: {
              normal: {
                position: 'right',
                show: true
              }
            },
            barWidth: '20px',
            data: WarnKey.score
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(LinkKey1);
        // myChart2.setOption(BueKey1);
        myChart3.setOption(EquKey1);
        myChart4.setOption(NetKey1);
        myChart5.setOption(SafeKey1);
        myChart6.setOption(BueSafeKey1);
        myChart7.setOption(SZTVPG1);
        myChart8.setOption(EviKey1);
        myChart9.setOption(WarnKey1);
        // myChart10.setOption(ProKey1);
        myChart11.setOption(BackKey1);
        myChart12.setOption(ValKey1);

        myChart01.setOption(LinkKey2);
        // myChart02.setOption(BueKey2);
        myChart03.setOption(EquKey2);
        myChart04.setOption(NetKey2);
        myChart05.setOption(SafeKey2);
        myChart06.setOption(BueSafeKey2);
        myChart07.setOption(SZTVPG2);
        myChart08.setOption(EviKey2);
        myChart09.setOption(WarnKey2);
        //  myChart010.setOption(ProKey2);
        myChart011.setOption(BackKey2);
        myChart012.setOption(ValKey2);

        myChart1.on('click', function (params) {

          console.log(params.data);
          $("#LinkKey_name").html(params.data.name);
          $("#LinkKey_summary").html(params.data.summary);
          $("#LinkKey_score").html("评估分数："+params.data.score+"分");
          $("#LinkKey_suggest").html(params.data.suggest);
          $("#LinkKey_description").html(params.data.description);
          $('#LinkKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });

        myChart3.on('click', function (params) {
          console.log(params.data);
          $("#EquKey_name").html(params.data.name);
          $("#EquKey_summary").html(params.data.summary);
          $("#EquKey_score").html("评估分数："+params.data.score+"分");
          $("#EquKey_suggest").html(params.data.suggest);
          $("#EquKey_description").html(params.data.description);
          $('#EquKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart4.on('click', function (params) {
          $("#NetKey_name").html(params.data.name);
          $("#NetKey_summary").html(params.data.summary);
          $("#NetKey_score").html("评估分数："+params.data.score+"分");
          $("#NetKey_suggest").html(params.data.suggest);
          $("#NetKey_description").html(params.data.description);
          $('#NetKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart5.on('click', function (params) {
          $("#SafeKey_name").html(params.data.name);
          $("#SafeKey_summary").html(params.data.summary);
          $("#SafeKey_score").html("评估分数："+params.data.score+"分");
          $("#SafeKey_suggest").html(params.data.suggest);
          $("#SafeKey_description").html(params.data.description);
          $('#SafeKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart6.on('click', function (params) {
          $("#BueSafeKey_name").html(params.data.name);
          $("#BueSafeKey_summary").html(params.data.summary);
          $("#BueSafeKey_score").html("评估分数："+params.data.score+"分");
          $("#BueSafeKey_suggest").html(params.data.suggest);
          $("#BueSafeKey_description").html(params.data.description);
          $('#BueSafeKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart7.on('click', function (params) {
          $("#SZTVPG_name").html(params.data.name);
          $("#SZTVPG_summary").html(params.data.summary);
          $("#SZTVPG_score").html("评估分数："+params.data.score+"分");
          $("#SZTVPG_suggest").html(params.data.suggest);
          $("#SZTVPG_description").html(params.data.description);
          $('#SZTVPG_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart8.on('click', function (params) {
          $("#EviKey_name").html(params.data.name);
          $("#EviKey_summary").html(params.data.summary);
          $("#EviKey_score").html("评估分数："+params.data.score+"分");
          $("#EviKey_suggest").html(params.data.suggest);
          $("#EviKey_description").html(params.data.description);
          $('#EviKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart9.on('click', function (params) {
          $("#WarnKey_name").html(params.data.name);
          $("#WarnKey_summary").html(params.data.summary);
          $("#WarnKey_score").html("评估分数："+params.data.score+"分");
          $("#WarnKey_suggest").html(params.data.suggest);
          $("#WarnKey_description").html(params.data.description);
          $('#WarnKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });

        myChart11.on('click', function (params) {
          $("#BackKey_name").html(params.data.name);
          $("#BackKey_summary").html(params.data.summary);
          $("#BackKey_score").html("评估分数："+params.data.score+"分");
          $("#BackKey_suggest").html(params.data.suggest);
          $("#BackKey_description").html(params.data.description);
          $('#BackKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart12.on('click', function (params) {
          $("#ValKey_name").html(params.data.name);
          $("#ValKey_summary").html(params.data.summary);
          $("#ValKey_score").html("评估分数："+params.data.score+"分");
          $("#ValKey_suggest").html(params.data.suggest);
          $("#ValKey_description").html(params.data.description);
          $('#ValKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });

        myChart01.on('click', function (params) {
          $("#LinkKey_name").html(params.data.name);
          $("#LinkKey_summary").html(params.data.summary);
          $("#LinkKey_score").html("评估分数："+params.data.score+"分");
          $("#LinkKey_suggest").html(params.data.suggest);
          $("#LinkKey_description").html(params.data.description);
          $('#LinkKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });

        myChart03.on('click', function (params) {
          $("#EquKey_name").html(params.data.name);
          $("#EquKey_summary").html(params.data.summary);
          $("#EquKey_score").html("评估分数："+params.data.score+"分");
          $("#EquKey_suggest").html(params.data.suggest);
          $("#EquKey_description").html(params.data.description);
          $('#EquKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart04.on('click', function (params) {
          $("#NetKey_name").html(params.data.name);
          $("#NetKey_summary").html(params.data.summary);
          $("#NetKey_score").html("评估分数："+params.data.score+"分");
          $("#NetKey_suggest").html(params.data.suggest);
          $("#NetKey_description").html(params.data.description);
          $('#NetKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart05.on('click', function (params) {
          $("#SafeKey_name").html(params.data.name);
          $("#SafeKey_summary").html(params.data.summary);
          $("#SafeKey_score").html("评估分数："+params.data.score+"分");
          $("#SafeKey_suggest").html(params.data.suggest);
          $("#SafeKey_description").html(params.data.description);
          $('#SafeKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart06.on('click', function (params) {
          $("#BueSafeKey_name").html(params.data.name);
          $("#BueSafeKey_summary").html(params.data.summary);
          $("#BueSafeKey_score").html("评估分数："+params.data.score+"分");
          $("#BueSafeKey_suggest").html(params.data.suggest);
          $("#BueSafeKey_description").html(params.data.description);
          $('#BueSafeKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart07.on('click', function (params) {
          $("#SZTVPG_name").html(params.data.name);
          $("#SZTVPG_summary").html(params.data.summary);
          $("#SZTVPG_score").html("评估分数："+params.data.score+"分");
          $("#SZTVPG_suggest").html(params.data.suggest);
          $("#SZTVPG_description").html(params.data.description);
          $('#SZTVPG_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart08.on('click', function (params) {
          $("#EviKey_name").html(params.data.name);
          $("#EviKey_summary").html(params.data.summary);
          $("#EviKey_score").html("评估分数："+params.data.score+"分");
          $("#EviKey_suggest").html(params.data.suggest);
          $("#EviKey_description").html(params.data.description);
          $('#EviKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart09.on('click', function (params) {
          $("#WarnKey_name").html(params.data.name);
          $("#WarnKey_summary").html(params.data.summary);
          $("#WarnKey_score").html("评估分数："+params.data.score+"分");
          $("#WarnKey_suggest").html(params.data.suggest);
          $("#WarnKey_description").html(params.data.description);
          $('#WarnKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });

        myChart011.on('click', function (params) {
          $("#BackKey_name").html(params.data.name);
          $("#BackKey_summary").html(params.data.summary);
          $("#BackKey_score").html("评估分数："+params.data.score+"分");
          $("#BackKey_suggest").html(params.data.suggest);
          $("#BackKey_description").html(params.data.description);
          $('#BackKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
        myChart012.on('click', function (params) {
          $("#ValKey_name").html(params.data.name);
          $("#ValKey_summary").html(params.data.summary);
          $("#ValKey_score").html("评估分数："+params.data.score+"分");
          $("#ValKey_suggest").html(params.data.suggest);
          $("#ValKey_description").html(params.data.description);
          $('#ValKey_href').attr('href', './problemResult.html?id=' + params.data.id + '&taskInstanceId=' + params.data.taskInstanceId + '');
        });
      } else {
        layer.closeAll();
        layer.msg(data.msg, { icon: 5 });
      }
    }, error: function error(data) {
      layer.closeAll();
      layer.msg("后台异常，提交失败", { icon: 5 });
    }
  });

  }

var token = localStorage.getItem("token");
var taskAll = new Vue({
  el: '#taskAll',
  data: function data() {
    return {
      lists: [],
      chartsData: [],
      BackKey: [],
      BueKey: [],
      BueSafeKey: [],
      EquKey: [],
      EviKey: [],
      LinkKey: [],
      NetKey: [],
      ProKey: [],
      SZTVPG: [],
      SafeKey: [],
      ValKey: [],
      WarnKey: [],
      taskInstanceId: ''
    };
  },
  methods: {
    getHref: function getHref() {
      return '/api' + this.lists['download'];
    },
    getPdfHref: function getPdfHref() {
      return '/api/' + this.lists['pdfPath'];
    },
    getScore: function getScore(val) {
      return val / 20;
    },
    getdate: function getdate(val,callback) {
      taskAll.setIdFromURL("taskInstanceId");
      axios.get('/api/common/taskAll', {
        params: {
          'token': token,
          'taskInstanceId': taskAll.taskInstanceId
        }
      }).then(function (response) {

        taskAll.lists = response.data.object;
        // console.log(taskAll.lists);  
        var obj = new Object();
        for (var p in taskAll.lists.link) {
          var charts = p;
          var q = p;
          var k = new Object();
          charts = new Object();
          charts.name = [];
          charts.score = [];
          for (var s in taskAll.lists.link[p].links) {

            charts.name.push(taskAll.lists.link[p].links[s].name);
            charts.score.push({
              value: taskAll.lists.link[p].links[s].score,
              name: taskAll.lists.link[p].links[s].name,
              suggest: taskAll.lists.link[p].links[s].suggest,
              summary: taskAll.lists.link[p].links[s].summary,
              description: taskAll.lists.link[p].links[s].description,
              factorScoreId: taskAll.lists.factorScoreId,
              id: taskAll.lists.link[p].links[s].id
            });
            k = Object.assign(charts);
          }
          obj[q] = Object.assign(k);
        }

        // taskAll.chartsData = obj;
        taskAll.BackKey = obj.BackKey;
        taskAll.BueKey = obj.BueKey;
        taskAll.BueSafeKey = obj.BueSafeKey;
        taskAll.EquKey = obj.EquKey;
        taskAll.EviKey = obj.EviKey;
        taskAll.LinkKey = obj.LinkKey;
        taskAll.NetKey = obj.NetKey;
        taskAll.ProKey = obj.ProKey;
        taskAll.SZTVPG = obj.SZTVPG;
        taskAll.SafeKey = obj.SafeKey;
        taskAll.ValKey = obj.ValKey;
        taskAll.WarnKey = obj.WarnKey;

        console.log(taskAll.BackKey);
        callback();
      }).catch(function (error) {
        callback();
        // window.location="index.html";
      });
    },
    setIdFromURL: function setIdFromURL(name) {
      taskAll.taskInstanceId = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

  },
  mounted: function mounted() {
    this.$nextTick(function () {

      taskAll.getdate(1,myChartData);
    });
  }
});