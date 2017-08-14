//觸發開啟登入怕一進入就需要他登入
var checkLogin = (function($) {
    //顯示登入
    var loginNow = function() {
        $(".member_lightbox").css("left", "0px"); //顯示
        $(".member_lightbox_inner").addClass("active"); // 顯示
        this.loginClose();
    };
    //關閉登入
    var loginClose = function() {
        $(".member_lightbox_bg,.close_lightbox").click(function(e) {
            $(".member_lightbox").css("left", "-9999px");
            $(".member_lightbox_inner").removeClass("active"); // 隱藏
            $(".member_lightbox_error_mobile").removeClass("active"); //關閉手機板錯誤訊息
            e.preventDefault();
        });
    };
    //手機板錯誤訊息
    var loginMobileError = function(p) {
        $(".member_lightbox_error_mobile").addClass("active");
        $(".member_lightbox_error_mobile").text(p);
    };

    //錯誤
    var loginError = function(p) {
        $(".member_lightbox").css("left", "0px"); //顯示
        $(".member_error").addClass("active"); // 顯示
        $(".member_error p").text(p)
        this.loginErrorClose();
    };
    //關閉錯物視窗
    var loginErrorClose = function() {
        $(".member_lightbox_bg,.member_error").click(function(e) {
            $(".member_lightbox").css("left", "-9999px");
            $(".member_error").removeClass("active"); // 隱藏
            e.preventDefault();
        });
    };

    //登入成功
    var loginSuccess = function() {
        $(".member_lightbox").css("left", "-9999px");
        $(".member_lightbox_inner").removeClass("active"); // 隱藏
        $(".member_lightbox_error_mobile").removeClass("active"); //關閉手機板錯誤訊息
        $(".member_error").removeClass("active"); // 隱藏
    };

    //呼叫函數
    return {
        loginNow: loginNow,
        loginClose: loginClose,
        loginError: loginError,
        loginErrorClose: loginErrorClose,
        loginMobileError: loginMobileError,
        loginSuccess:loginSuccess
    };
})(jQuery);

//點選後開啟
$(".memberTouch:not(.active)").click(function() {
    checkLogin.loginNow();
});

