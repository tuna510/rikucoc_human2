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
            if (scroll > imgPos - windowHeight + windowHeight / 5) {
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
            if (scroll > imgPos - windowHeight + windowHeight - 200) {
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
            if (scroll > imgPos - windowHeight + windowHeight - 150) {
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
            if (scroll > target - windowHeight + 150) {
                $(this).css('opacity', '0.6');
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
        $('.kimi_back2').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
                $(this).css('opacity', '0.3');
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
        $('.kimi_back3').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
                $(this).css('opacity', '0.3');
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
        $('.kimi_back4').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
                $(this).css('opacity', '0.3');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});

// タイトルがふわっと出てくる
$(function () {
    function animation() {
        $('.title_logo').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
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

// 枠ふわっ
$(function () {
    function animation() {
        $('.huwa').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 120) {
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

// 1行目ふわっ
$(function () {
    function animation() {
        setTimeout(function () {
            $('.start').each(function () {
                var target = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > target - windowHeight + 150) {
                    $(this).css('opacity', '1');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        }, 2000)
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});
// ------------------------------------------
// HOふわっと
$(function () {
    function animation() {
        $('.test2').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
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

$(function () {
    function animation() {
        $('.test3').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 150) {
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

//アコーディオンメニュー

$(function () {
    $('.button').prevAll().hide();
    $('.button').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).children('img').attr("src", $('.button img').attr("src").replace("_more", "_close"));
        } else {
            $(this).prevAll().slideUp();
            $(this).children('img').attr("src", $('.button img').attr("src").replace("_close", "_more"));
        }
    });
});


// ハンバーガーメニュー
$(function () {
    $('.sp_menu_button').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });
});
