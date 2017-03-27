(function ($, window) {
 
    var App = App || {
        init: function () {
            $('.js-toggle-search').on('click', function () {
                $('.js-search').toggleClass('is-visible');
            });
 
            $('.js-next a').on('click', function (e) {
                $(infinite_scroll.contentSelector).infinitescroll(infinite_scroll);
 
                var $body = $('body');
 
                $body.scrollTop($body.scrollTop() - 1);
 
                e.preventDefault();
            })
 
            $(window).keydown(function (event) {
                if (event.keyCode == 27) {
                    if ($('.js-search').attr('class').indexOf('is-visible') > 0) {
                        $('.js-search').removeClass('is-visible');
                    }
                }
            });
 
            $('.js-search .text-input').keydown(function (event) {
                if (event.keyCode == 13) {
                    location.href = 'https://www.baidu.com/s?wd=site:www.opqnext.com ' + $(this).val();
                    return false;
                }
            })
        }
    };
 

    $(App.init);

    $(function(){
 
        var navToggle = $('#nav-toggle'),
            nav = $('nav'),
            navLinks = nav.find('a');
 
        navToggle.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
            return false;
        });
        navLinks.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
        });
 
        $(document).on('click', function () {
            if (nav.hasClass('open')) {
                navToggle.toggleClass('active');
                nav.toggleClass('open');
            }
        });
 
        $('.btn-slide').click(function () {
            $('#panel').slideToggle("slow");
            $(this).toggleClass("active");
            return false;
        });
 
        $(window).scroll(function () {
            var header = $('header');
 
            if ($(this).scrollTop() > 1) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
 
        $("#social-share").click(function () {
            $("#social").toggleClass("visible").slideToggle(200);
        });
 
        if ($('.welcome')[0]) {
            $('.author-info').hide();
            $('span.info-edit').click(function () {
                $('.author-info').toggle();
            });
        }

        var bannerNode = $('.top-image');
        if(bannerNode.data('enable')){
            var banner = [3,4,6,9,10,11,13,14,15,16,17,18];
            var index = parseInt((Math.random() * banner.length));
            //console.log(banner.length,index);
            bannerNode.attr('style','background-image:url(https://image.opqnext.com/banner/'+banner[index]+'.jpg)');
            //bannerNode.attr('style','background-image:url(/banner/'+index+'.jpg)');
        }
    })

}(jQuery, window));