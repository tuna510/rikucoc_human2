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
        var position = target.offset().top - 80;
        var speed = 600;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});
