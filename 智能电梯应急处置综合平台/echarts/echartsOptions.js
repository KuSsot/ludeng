function sygz(str,dateType) {
	let typeArr=[];
	switch (dateType) {
		//1：月  2：年  3：日
		case 1:
			typeArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
			break;
		case 2:
			typeArr=['周一','周二','周三','周四','周五','周六','周日'];
			break;
		case 3:
			typeArr=['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00'];
			break;
	}

	let option = {
		// title: {
		// 	text: ''
		// },
		tooltip: {
			trigger: 'axis',
			textStyle: {
				color: '#fff',
			}
		},
		legend: {
			data:str,
			textStyle: {
				color: '#fff',
			}
		},
		grid: {
			left: '3%',
			right: '3%',
			bottom: '1%',
			containLabel: true
		},
		/*toolbox: {
			feature: {
				saveAsImage: {}
			}
		},*/
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: typeArr,
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff'
				}
			}
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff'
				}
			}
		},
		series: [
			{
				name:str[0],
				type:'line',
				stack: '总量',
				data:[120, 132, 101, 134, 90, 230, 210],
				textStyle: {
					color: '#fff',
				}
			},
			{
				name:str[1],
				type:'line',
				stack: '总量',
				data:[220, 182, 191, 234, 290, 330, 310],
				textStyle: {
					color: '#fff',
				}
			},
		]
	};
	return option;
}

/*电梯状态信息数量的地图*/
function dtztxxsl(){
	// 指定图表的配置项和数据
	let app = {};
	let option = null;

	let mapName = 'china';
	let data = [
		{name:"北京",value:199},
		{name:"天津",value:42},
		{name:"河北",value:102},
		{name:"山西",value:81},
		{name:"内蒙古",value:47},
		{name:"辽宁",value:67},
		{name:"吉林",value:82},
		{name:"黑龙江",value:123},
		{name:"上海",value:24},
		{name:"江苏",value:92},
		{name:"浙江",value:114},
		{name:"安徽",value:109},
		{name:"福建",value:116},
		{name:"江西",value:91},
		{name:"山东",value:119},
		{name:"河南",value:137},
		{name:"湖北",value:116},
		{name:"湖南",value:114},
		{name:"重庆",value:91},
		{name:"四川",value:125},
		{name:"贵州",value:62},
		{name:"云南",value:83},
		{name:"西藏",value:9},
		{name:"陕西",value:80},
		{name:"甘肃",value:56},
		{name:"青海",value:10},
		{name:"宁夏",value:18},
		{name:"新疆",value:180},
		{name:"广东",value:123},
		{name:"广西",value:59},
		{name:"海南",value:14},
	];

	let geoCoordMap = {};
	let toolTipData = [
		{name:"北京",value:[{name:"科技人才总数",value:95},{name:"理科",value:82}]},
		{name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
		{name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
		{name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
		{name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
		{name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
		{name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
		{name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
		{name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
		{name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
		{name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
		{name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
		{name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
		{name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
		{name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
		{name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
		{name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
		{name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
		{name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
		{name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
		{name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
		{name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
		{name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
		{name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
		{name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
		{name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
		{name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
		{name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
		{name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
		{name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
		{name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
	];

	/*获取地图数据*/
	getdtztxxsl.showLoading();
	let mapFeatures = echarts.getMap(mapName).geoJson.features;
	getdtztxxsl.hideLoading();
	mapFeatures.forEach(function(v) {
		// 地区名称
		let name = v.properties.name;
		// 地区经纬度
		geoCoordMap[name] = v.properties.cp;

	});
	let max = 480,
		min = 9; // todo
	let maxSize4Pin = 100,
		minSize4Pin = 20;

	let convertData = function(data) {
		let res = [];
		for (let i = 0; i < data.length; i++) {
			let geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value),
				});
			}
		}
		return res;
	};
	option = {
		tooltip: {
			padding: 0,
			enterable: true,
			transitionDuration: 1,
			textStyle: {
				color: '#000',
				decoration: 'none',
			},
			// position: function (point, params, dom, rect, size) {
			//   return [point[0], point[1]];
			// },
			formatter: function(params) {
				// console.log(params)
				let tipHtml = '';
				tipHtml =
					'<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
					+'<div style="width:calc(100%-40px);height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px"><i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;"></i>'
					+'<span style="margin-left:10px;color:#fff;font-size:16px;">'+params.name+'</span></div>'
					+'<div style="padding:20px">'
					+'<p style="color:#fff;font-size:12px;"><i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
					+'路灯总数：'+'<span style="color:#11ee7d;margin:0 6px;">'+toolTipData.length+'</span>'+'个'+'</p>'
					+'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
					+'在线总数：'+'<span style="color:#f48225;margin:0 6px;">'+toolTipData.length+'</span>'+'个'+'</p>'
					+'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
					+'离线总数：'+'<span style="color:#f4e925;margin:0 6px;">'+toolTipData.length+'</span>'+'个'+'</p>'
					+'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
					+'故障总数：'+'<span style="color:#25f4f2;margin:0 6px;">'+toolTipData.length+'</span>'+'个'+'</p>'
					+'</div>'+'</div>';
				setTimeout(function() {
					tooltipCharts(params.name);
				}, 10);
				return tipHtml;
			}

		},

		visualMap: {
			show: false,
			min: 0,
			max: 200,
			left: '10%',
			top: 'bottom',
			calculable: true,
			seriesIndex: [1],
			inRange: {
				color: ['#04387b', '#467bc0'] // 蓝绿
			}
		},
		geo: {
			show: true,
			map: mapName,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#023677',
					borderColor: '#1180c7',
				},
				emphasis: {
					areaColor: '#4499d0',
				}
			}
		},
		series: [{
			name: '散点',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertData(data),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#fff'
				}
			}
		},
			{
				type: 'map',
				map: mapName,
				geoIndex: 0,
				aspectScale: 0.75, //长宽比
				showLegendSymbol: false, // 存在legend时显示
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: false,
						textStyle: {
							color: '#fff'
						}
					}
				},
				roam: true,
				itemStyle: {
					normal: {
						areaColor: '#031525',
						borderColor: '#3B5077',
					},
					emphasis: {
						areaColor: '#2B91B7'
					}
				},
				animation: false,
				data: data
			},
			{
				name: '点',
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 6,
			},
			{
				name: 'Top 5',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: convertData(data.sort(function(a, b) {
					return b.value - a.value;
				}).slice(0, 10)),
				symbolSize: function(val) {
					return val[2] / 10;
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				label: {
					normal: {
						formatter: '{b}',
						position: 'left',
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: 'yellow',
						shadowBlur: 10,
						shadowColor: 'yellow'
					}
				},
				zlevel: 1
			},

		]
	};
	return option;
}


/* 当天和本月的故障指数 饼形图*/
function dtbygzzs(typeNum,rem){
	let color= ['#fb734e', '#e32f46','#94d96c', '#0bbcb7','#1a9bfc','#7049f0'];//用到的颜色数组
	if(rem <= 32){//判断也页面字体的大小
		rem = 100;
	}else if(rem>32 && rem <=42){
		rem = 200;
	}
	/* 创建环形的比例位置 */
	let Line1Arr = [0.60 * rem , 0.68 * rem];	/*76.8*/
	let Line2Arr = [0.45 * rem , 0.53 * rem];
	let Line3Arr = [0.30 * rem , 0.38 * rem];
	let fontSize = 0.4 * rem;
	let typeArr=[];
	switch (typeNum) {//区分质量等级的参数
		//1：优  2：中  3：差
		case 1:
			typeArr=[['优','#0bbcb7'],[1,0],[1,99],[1,99]];
			break;
		case 2:
			typeArr=[['良','#94d96c'],[1,99],[1,0],[1,99]];
			break;
		case 3:
			typeArr=[['差','#fb734e'],[1,99],[1,99],[1,0]];
			break;
	}

	let dataStyle = {
		normal: {
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			shadowBlur: 50,
			borderWidth: 30,
			shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
		}
	};
	let placeHolderStyle = {
		normal: {
			color: '#393d50',
			label: {
				show: false
			},
			labelLine: {
				show: false
			}
		},
		emphasis: {
			color: '#393d50'
		}
	};
	let option = {
		// backgroundColor: '#142058',
		title: {
			text: typeArr[0][0],
			x: 'center',
			y: 'center',
			textStyle: {
				fontWeight: 'normal',
				fontSize: fontSize,
				color: typeArr[0][1],
			}
		},
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{b} : <br/>{d}%",
			backgroundColor: 'rgba(0,0,0,0.7)', // 背景
			padding: [3, 4], //内边距
			extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
		},
		legend: {
			orient: 'vertical',
			// icon: 'circle',
			show: false ,
			right: 'right',
			top: '5',
			itemGap:5,
			data: ['优', '良', '差', '04', '05', '06'],
			textStyle: {
				color: '#fft'
			}
		},
		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: false,
			radius: Line1Arr,
			center:['50%','50%'],
			itemStyle: dataStyle,
			hoverAnimation: false,
			startAngle: 90,
			label:{
				borderRadius:'10',
			},
			data: [{
				value: typeArr[3][0],
				name: '差',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color:color[0]
						}, {
							offset: 1,
							color: color[1]
						}])
					}
				}
			},
				{
					value: typeArr[3][1],
					name: '',
					tooltip: {
						show: false
					},
					itemStyle: placeHolderStyle
				},
			]
		},
			{
				name: 'Line 2',
				type: 'pie',
				clockWise: false,
				radius: Line2Arr,
				center:['50%','50%'],
				itemStyle: dataStyle,
				hoverAnimation: false,
				startAngle: 90,
				data: [{
					value: typeArr[2][0],
					name: '良',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: color[2]
							}, {
								offset: 1,
								color: color[3]
							}])
						}
					}
				},
					{
						value: typeArr[2][1],
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: placeHolderStyle
					},
				]
			},
			{
				name: 'Line 3',
				type: 'pie',
				clockWise: false,
				radius: Line3Arr,
				center:['50%','50%'],
				itemStyle: dataStyle,
				hoverAnimation: false,
				startAngle: 90,
				data: [{
					value: typeArr[1][0],
					name: '优',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: color[4]
							}, {
								offset: 1,
								color: color[5]
							}]),
						}
					}
				},
					{
						value: typeArr[1][1],
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: placeHolderStyle
					},
				]
			}
		]
	};
	return option;
}
/* 故障区域分析 饼形图*/
function gzqyfx(rem) {
	// app.title = '环形图';
	let centerArr=['30%', '50%'];
	if(rem <= 32){
		rem = 50;
		centerArr=['20%', '50%'];
	}else if(rem>32 && rem <=42){
		rem = 100;
	}
	let option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)",

		},
		legend: {
			orient: 'vertical',
			x: 'right',
			right: 'right',
			data:['安全保护装置','人为原因','外部原因','门系统','曳引系统','导向系统','轿厢','控制系统','电气系统'],
			textStyle: {
				color: '#fff',
				fontSize:0.15*rem,
			}
		},
		series: [
			{
				name:'访问来源',
				type:'pie',
				center: centerArr,
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				textStyle: {
					color: '#fff',
					fontSize:0.15*rem,
				},
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '30',
							fontWeight: 'bold'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:335, name:'安全保护装置'},
					{value:310, name:'人为原因'},
					{value:234, name:'外部原因'},
					{value:135, name:'门系统'},
					{value:1548, name:'曳引系统'},
					{value:154, name:'导向系统'},
					{value:548, name:'轿厢'},
					{value:632, name:'控制系统'},
					{value:1000, name:'电气系统'},
				]
			}
		]
	}
	return option;
}