window.addEventListener('DOMContentLoaded', function () {

    //추천순 카테고리 움직이기
            $('.name_select').click(function(){
            $(".checked").toggle(function(){
                $('.name_select').css('color', '#5f0080');
            });
        });

        //퀵 베너 따라 내려오기
        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop < 70) {
                scrollTop = 70;
            }
            $(".qnb").stop();
            $(".qnb").animate({"top": scrollTop});
        });


    });
