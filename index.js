$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // if (scroll > 50) {
        //     $("body").css("background", "rgba(0,0,0,0.5");

        if (scroll > 50) {
            $("body").addClass('chain');


        } else {

            $("body").removeClass("chain");
        }

    })

})