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
$('.test').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.test').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 100) {
            $(this).addClass("fadeInDown");
        }
    });
});
