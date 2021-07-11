var chart = echarts.init(document.getElementById("chart"));
var	option = {
    backgroundColor: '#fff',	
    title: {                    // 图表标题
        text: "V-Net",           // 标题文本
        left : '3%',                    // 标题距离左侧边距
        top : '3%',                     // 标题距顶部边距
        textStyle : {                       // 标题样式
            color : '#000',                     // 标题字体颜色
            fontSize : '30',                    // 标题字体大小
        }
    },
    tooltip: {                  // 提示框的配置
        formatter: function(param) {
            // if (param.dataType === 'edge') {
            //     return param.data.target;
            // }
            return param.data.name;
        }
    },
    series: [{
        type: "graph",          // 系列类型:关系图
        top: '10%',             // 图表距离容器顶部的距离
        roam: true,             // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        focusNodeAdjacency: true,   // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
                force: {                // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
                                // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
            repulsion: 20000,            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
            edgeLength: [1500, 1000]      // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
                                        // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
                                        // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
        },
        layout: "force",            
        symbol: 'circle',
        edgeSymbol: ['arrow', 'arrow'],
        edgeSymbolSize: [10, 10],
        
        label: {                // 关系对象上的标签
            normal: {
                show: true,                 // 是否显示标签
                position: "inside",         // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                textStyle: {                // 文本样式
                    fontSize: 6,
                    color:'#2F4F4F'
                }
            }
        },
        lineStyle:{color:'#000'},
        data:datalist,
        links:linklist,
    }],
    
    animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
    animationDurationUpdate: 100                    // 数据更新动画的时长。[ default: 300 ]
};
	
// 使用刚指定的配置项和数据显示图表
chart.setOption(option)
