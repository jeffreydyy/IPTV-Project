/**
 * Created by l2776 on 2017/1/16.
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

function Jump(commid){                  
    var fromTip = GetQueryString("type");
    if (fromTip == "hg") {
        location.href = 'https://momall.telefen.com/mobilemallkhd/Commodity/Detail/' + commid;
    } else if (fromTip == "wap") {
        location.href = 'https://momall.telefen.com/MobileMall/Commodity/Detail/' + commid;
    } else if (fromTip == "wx"){
        location.href = 'http://wx.telefen.com/Tyjf/WxZone/OrderPay/exchange.aspx?c=' + commid;       
    }   
}
        
function IncreaseHref(url) {
    var fromTip = GetQueryString("type");
    if (fromTip == "hg") {
        location.href = url + "?type=hg";
    } else if (fromTip == "wap") {
        location.href = url + "?type=wap";
    } else if (fromTip == "wx") {
        location.href = url + "?type=wx";
    }
}

　