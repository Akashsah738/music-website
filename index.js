$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // if (scroll > 50) {
        //     $("body").css("background", "rgba(0,0,0,0.5");

        if (scroll > 200) {
            $("body").addClass('chain');


        } else {

            $("body").removeClass("chain");
        }

    })

})


function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
    // alert('click here');
}