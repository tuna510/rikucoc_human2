//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
    var height = $("#header").height();
    // 100px余裕を持たせる
    $("body").css("margin-top", height + 100);
});

// ---------------------------------------

// スクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 50;
        var speed = 600;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});

// ------------------------------------------
// 文字がふわっと出てくる
$(function () {

    $(window).scroll(function () {

        $(".fade_off").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight - 350) {
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });
});
