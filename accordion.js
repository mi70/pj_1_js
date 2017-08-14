//accordion list
var accordion = (function($) {
    //開一組後其他會關閉
    var openOnly = function(target, liH, runTime, runStatus, touchNow) {
        //搜尋一次目標
        var _liH = liH + "px";
        var _aniTime = runTime + " " + runStatus;
        var _touchNow = touchNow;
        var _delH = liH;
        $(target).each(function(i, index) {
            //設定高
            $(this).data("h", $(this).height());
            $(this).data("orh", $(this).height());; //鎖定的高度
            //設定動畫
            $(this).css("transition", _aniTime);
            //關閉高度
            $(this).css("height", _liH);
            //點擊觸發
            $(">a", $(this)).click(function(e) {
                //alert($(this).data("h"))
                var _thisLi = $(this).parent();
                var _ulH = ($(this).next("ul").height() + _delH) + "px";
                _thisLi.data("h", _ulH); //設定改變的高度
                _thisLi.css("height", _thisLi.data("h")).siblings().css("height", _liH);
                _thisLi.addClass(_touchNow).siblings().removeClass(_touchNow);
                  if (_thisLi.parents("ul").length >= 2) {
                     _thisLi.parent().parent().css("height", "auto");
                 } 
             //   alert(_ulH)
                e.preventDefault();

            });

        });
    };

    return {
        openOnly: openOnly
    };
})(jQuery)

accordion.openOnly(".common_ul>li>ul>li.more", 48, "0.4s", "ease-out", "current");
accordion.openOnly(".common_ul>li.more", 61, "0.4s", "ease-out", "active");