$(function () {
    if (errMsg) {
        ShowMsg(errMsg);//提示报错信息
    }
    //#region 营销活动点击处理
    $(".prodDFavor").click(function () {
        $(".prodDFavorTip").fadeIn(300, function () {
            $(".prodDFavorTip h3 i").click(function () {
                $(".prodDFavorTip").hide();
            })
        });
    });
    //#endregion
    //#region 收藏
    var isDuring = true;//防止重复点击收藏
    $(".pbCol").click(function () {
        if (isDuring) {
            isDuring = false;
            var addType = 1;
            if ($(this).hasClass("on")) {
                //取消收藏
                addType = 0;
            }
            //get收藏数据
            $.ajax({
                type: "get",
                url: rootUrl + "Commodity/Collect",
                data: { CommodityID: cid, CommodityName: cname, Price: price, Picture: pic, IsJd: levelId, type: addType },
                success: function (rst) {

                    if (rst.ErrCode == '0000') {
                        $('.pbCol').toggleClass("on");
                        $('.pbCol').find("i").toggle();
                    }
                    ShowMsg(rst.ErrMsg);
                    isDuring = true;
                },
                error: function (msg) {
                    console.log(msg);
                    ShowMsg("操作失败");
                    isDuring = true;
                }
            });
        }
    });
    //#endregion
    //#region 规格显示
    if (isShowSpec) OrderSure();
    //#endregion
    //显示商品详情公告
    ShowDelayNotice();

})

//获取商品事件公告
function ShowDelayNotice() {
    $.ajax({
        type: 'POST',
        url: rootUrl + "Commodity/QueryCommodityDelayNotice",
        data: { id: cid },
        cache: false,
        success: function (data) {
            var json = data;
            if (data != null && data.ErrCode == "0000" && data.NoticeContent != null && data.NoticeContent != "") {
                var html = template('DelayNoticetmp', json);
                document.getElementById('DelayNotice').innerHTML = html;
            }
        }
    });
}

//#region 提示消息
function ShowMsg(msg) {
    $(".WarmthHint").html("<p>" + msg + "</p>").show(300, function () {
        $(this).delay(2000).fadeOut();
    });
}
//#endregion
//#region 在线客服
function getIM() {
    $.ajax({
        url: rootUrl + "Commodity/GetIMOnlineUrl",
        type: "Get",
        dataType: "json",
        data: { CommodityID: '@Model.CommodityInfo.CommodityID' },
        success: function (data) {
            if (data.ErrCode == '0000') {
                window.location.href = data.Redirect;
            }
            else {
                alertMsg(data.ErrMsg);
            }
        }
    })
}
//#endregion
//#region 点击立即兑换
function OrderSure() {
    try {
        dplus.track("商品详情页统计", { "立即兑换": cid + "," + cname });
    } catch (error) {
    }
    //存在商品规格则弹出规格选择框
    if (spec) {
        $.get(rootUrl + "Commodity/SepcLoginVerify", { cid: cid }, function (rst) {
            if (rst.ErrCode == '0000') {
                $(".puctlayerBox").show();
                $(".PLBG").show();
            }
        });
        $("body").css("overflow", "hidden");
    }
    else {
        location.href = orderCreateUrl;//跳订单创建页
    }
}
//#endregion
//#region 隐藏规格弹窗
function HideSelf() {
    $(".puctlayerBox,.PLBG").hide();
    $("body").css("overflow", "auto");
}
$(".layerCont h3 q,.PLBG").click(function () {
    $(".puctlayerBox,.PLBG").hide();
    $("body").css("overflow", "auto");
})
//#endregion
//#region 规格对象
function Spec(title, name) {
    this.SpecTitle = title;
    this.SpecName = name;
}
//#endregion
//#region 选中事件
var specLimitMsg;
var limitNum;
function SelectedChange() {
    //#region 获取所选规格库存
    var specInfo = GetSelectedSepcInfo();
    $(".numInpBox").val(1);//数量重置
    if (specInfo) {
        if (Number(canBuyNum) > specInfo.SpecStorage) {
            specLimitMsg = '该商品规格购买数量已达上限!';
            limitNum = specInfo.SpecStorage;
        }

        else {
            limitNum = canBuyNum;
            specLimitMsg = '';
        }
    }
    //#endregion
    //#region 动态注册数量加减事件
    $(".subBtn").addClass("jianBtn");
    if (limitNum <= 1) {
        $(".addBtn").addClass("jianBtn");
    }
    else {
        $(".addBtn").removeClass("jianBtn");
    }
    //#region +
    $(".addBtn").unbind().click(function () {
        var curNum = $(".numInpBox").val();
        var num = Number(curNum) + 1;
        BuyNumLimit(num);
        //虚拟商品,前端给出不发卡密提示
        if (typeId == "2") {
            if (num > 4) {
                $('#virturalmsg').show();
            }
        }
    });
    //#endregion
    //#region -
    $(".subBtn").unbind().click(function () {
        $(".addBtn").removeClass("jianBtn");
        var curNum = $(".numInpBox").val();
        var num = Number(curNum) - 1;
        BuyNumLimit(num);
        //虚拟商品,前端给出不发卡密提示
        if (typeId == "2") {
            if (num <= 4) {
                $('#virturalmsg').hide();
            }
        }
    });
    //#endregion
    //#endregion    
}
//#endregion
//#region 获取选中的规格[{颜色：红色},{大小：中},{长度：XL}]
function GetSelectedSpec() {
    //遍历规格
    var specs = new Array();//当前选中规格
    $('.plTipsBox').each(function (index, ele) {
        var title = ele.firstElementChild.innerText;
        var name = $('.plTipsBox .on')[index] != undefined ? $('.plTipsBox .on')[index].innerText : '';//class=on代表选中
        if (title.substring(title.length - 1, title.length) == "：")
            title = title.substring(0, title.length - 1);//去除万恶的：
        var spec = new Spec(title, name);
        specs.push(spec);
    });
    return specs;
}
//#endregion
//#region 获取选中规格信息id、规格、库存
function GetSelectedSepcInfo() {
    var sleSpec = GetSelectedSpec();
    var isFind = false;
    var findIndex = -1;
    $.each(allSpecs, function (index, info) {
        var spec = info.SpecList;//子组合
        $.each(sleSpec, function (i, ss) {//遍历当前选择的规格[{A:a},{B:b}]
            if (isObjectValueEqual(ss, spec[i])) {
                isFind = true;
            }
            else {
                isFind = false;
                return false;
            }
        });
        if (isFind) {//成功查询到符合条件的规格
            findIndex = index;
            return false;//break
        }
    });
    if (findIndex > -1) {
        return allSpecs[findIndex];
    }
    else return null;
}
//#endregion
//#region 数量校验
function BuyNumLimit(num) {
    $(".subBtn").removeClass("jianBtn");
    $(".addBtn").removeClass("jianBtn");
    if (num >= limitNum) {
        $(".addBtn").addClass("jianBtn");
        if (num > limitNum) {
            num = limitNum;
            if (specLimitMsg) ShowLimitMsg(specLimitMsg);
            else
                ShowLimitMsg(limitMsg);
        }
    }
    if (num <= 1) {
        $(".subBtn").addClass("jianBtn");
        num = 1;
    }

    $(".numInpBox").val(num);
}
//#endregion
//#region 数量输入
function BuyNumChange(obj) {
    var num = Number(obj.value);
    BuyNumLimit(num);
}
//#endregion
//#region 确认规格跳转提交订单页面
function MakeOrder() {
    var specInfo = GetSelectedSepcInfo();
    var exParams = "";
    if (specInfo != null)
        exParams = "&sid=" + specInfo.SpecId + "&buyNum=" + $('.numInpBox').val();
    location.href = orderCreateUrl + exParams;
}
//#endregion
//#region 简单判断两个对象是否相等
function isObjectValueEqual(a, b) {
    // Of course, we can do it use for in 
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
//#endregion
function ShowLimitMsg(msg) {
    var appcont = $('body').append(" <div class='WarmthHint' style='position:fixed;z-index:9999999;'><p>" + msg + "</p></div>");
    appcont.show();
    setTimeout(function () {
        $(".WarmthHint").remove()
    }, 1200)
}