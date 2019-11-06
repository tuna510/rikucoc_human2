//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
    var height = $("#header").height();
    // 余裕を持たせる
    $("body").css("margin-top", height);
});

// ---------------------------------------

// スクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 70;
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
            if (scroll > imgPos - windowHeight + windowHeight / 4) {
                $(this).addClass("fade_on");
            }
        });
    });
});

// 血がびしゃあ
$(function () {
    $(window).scroll(function () {
        $(".chi_a").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight - 50) {
                $(this).addClass("chi_on");
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $(".chi_b").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight - 50) {
                $(this).addClass("chi_on");
            }
        });
    });
});

// カードがふわっと出てくる
$(function () {
    function animation() {
        $('.kimi_back').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight) {
                $(this).css('opacity', '0.5');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});

$(function () {
    function animation() {
        $('.title_logo').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});
// ------------------------------------------


// $(function () {
//     $('.menu-trigger').on('click', function () {
//         $(this).toggleClass('active');
//         return false;
//     });
// });
