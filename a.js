$(document).ready(function () {


    $("#hide").click(function () {
        $(".im").hide(1000);
    });
    $("#show").click(function () {
        $(".im").show(1000);
    });
    $("em").animate({
        "margin-left": "25%"
    }, "slow");
    $("em").animate({
        "margin-left": "0%"
    }, "slow");

    $('.next').on('click', function () {



        var currentImg = $('.active');

        var nextImg = currentImg.next();
        $(nextImg).fadeOut(1000, function () {


            if (nextImg.length > 1) { //check the length of the image not equal to Zero
                console.log(nextImg.length)
                currentImg.removeClass('active') //.css('z-index',-10);
                nextImg.addClass('active');
                $(".active").fadeIn(1000);


            }

        });
    });


    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        $(prevImg).fadeOut(1000, function () {


            if (prevImg.length) {
                currentImg.removeClass('active');
                prevImg.addClass('active');
                $(".active").fadeIn(1000);
            }

        });
    });
    setInterval(function () {

    }, 1000);

});

var preloader = document.getElementById('loading');
function myFun() {
    preloader.style.display = 'none';
}

