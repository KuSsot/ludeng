
let url='http://www.starryiot.com/service/RoadLampService/';
let token='6417f4605dc54b90a950e06c3f9e7f06';//每日更新随机生成

function resetCode(){//初始化code的方法
    let ret=false;
    $.ajax({
        async:false,//改为同步
        url:url+'lamp/status/initialize',
        type:'post',
        dataType:'json',
        data:{
            token:token,
            type:'TDS-ROAD-LAMP',
        }
    }).done(function (data) {
        //200 成功
        if(data.ret == '200'){
            ret = true;
        }else {
            alert(data.msg);
        }
    });
    return ret;
}

function countStatus(){//查询状态总数
    $.ajax({
        url:url+'lamp/status/countStatus',
        type:'post',
        dataType:'json',
        data:{
            token:token,
        }
    }).done(function (data) {
        $('#scrollSum').val(parseInt(data.data));
        show_num1(data.data);
    })
}

function countMalfunctionNum() {//故障总数以及处理数量
    $.ajax({
        url:url + "lamp/status/countMalfunctionNum",
        type:'post',
        dataType:'json',
        data:{
            token:token,
        }
    }).done(function (data) {
        //inProcess：正在处理的、sumTotal：总数、unsolved：未解决的、unsolvedCritical：未解决严重故障、
        for (let key in data.data){
            $('#'+key+'').text(data.data[key]);
        }
    })
}

function selectProjectAllLocation() {//查询项目地址 maxX maxY 为项目地址坐标
    $.ajax({
        url:url + "lamp/status/selectProjectAllLocation",
        type:'post',
        dataType:'json',
        data:{
            token:token,
        }
    }).done(function (data) {
        // console.log(data);
    })
}

function malfunctionGraph(yearOrMonth) {//故障曲线图
    $.ajax({
        url:url + "lamp/status/malfunctionGraph",
        type:'post',
        dataType:'json',
        data:{
            token:token,
            yearOrMonth:yearOrMonth,//本月每天故障"month"  ; //本年每月故障"year"
        }
    }).done(function (data) {

    })
}

function malfunctionLevel(rem) {//当天和本月的故障指数
    $.ajax({
        url:url + "lamp/status/malfunctionLevel",
        type:'post',
        dataType:'json',
        data:{
            token:token,
        }
    }).done(function (data) {
        getdtgzzs.setOption(dtbygzzs(data.data.thisMonthLevel,rem));
        getnygzzs.setOption(dtbygzzs(data.data.todayLevel,rem));
    })
}

function countMalfunctionForDayAndMonth() {//统计故障数，按月和天
    $.ajax({
        url:url + "lamp/status/countMalfunctionForDayAndMonth",
        type:'post',
        dataType:'json',
        data:{
            token:token,
        }
    }).done(function (data) {
        //normal:普通故障  critical:严重故障
        $('#dtNumTotal').text(data.data.thisMonth.critical+data.data.thisMonth.normal);//当天故障数
        $('#dtYZNum').text(data.data.thisMonth.critical);//当天严重故障数
        $('#byNumTotal').text(data.data.today.critical+data.data.today.normal);//本月故障数
        $('#byYZNum').text(data.data.today.critical);//本月严重故障数
    })
}

function getProjectList(){
    $.ajax({
        url:url + "project/selectProjectInGroup",
        type:'post',
        dataType:'json',
        data:{
            groupId: '1',
            isRecursion: true,
            token: token
        }
    }).done(function (data) {
        console.log(data);

        // countPower：总功率 /瓦；
        // currentPower：实际功率 /千瓦；
        // gatewayExceptionNum：网关故障数量；
        // gatewayNum：网关数量；
        // group_id：分组；
        // lightingNum：开灯数量；
        // project_id：项目的id；
        // project_name：项目名称；
        // project_type：项目类型；
        // streetLampAbnormityNum：故障路灯数量；
        // streetlightNum：总路灯数量

        let xmNum=0;    //项目数量
        let ldNum=0;    //路灯数量
        let jnNum=0;    //本月节能
        let ycxmNum=0;  //异常项目数
        let ycldNum=0;  //异常路灯数
        let hnNum=0;    //本月总能耗
        $.each(data.data,function (idx,item) {
            xmNum += item.length;
            $.each(item,function (jdx,jtem) {
                ldNum += jtem.streetlightNum;
                ycldNum += jtem.streetLampAbnormityNum;

                if(jtem.streetLampAbnormityNum != 0){
                    ycxmNum += 1;
                }
            });
            console.log(item);
        });
        $('#xmNum').text(xmNum);
        $('#ldNum').text(ldNum);
        $('#jnNum').text(jnNum);
        $('#ycxmNum').text(ycxmNum);
        $('#ycldNum').text(ycldNum);
        $('#hnNum').text(hnNum);
    })
}

