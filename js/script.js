$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#barraHtml").animate({
                width: "90%"
            },2000);

            $("#barraJs").animate({
                width: "85%"
            },2000);

            $("#barraPhp").animate({
                width: "95%"
            },2000);

            $("#barraMysql").animate({
                width: "85%"
            },2000);

            $("#barraJava").animate({
                width: "80%"
            },2000);

            $("#barraC").animate({
                width: "70%"
            },2000);
        }
    });

    $("#btnAsideSobre").click(function(){
        $('html, body').animate({
            scrollTop: $("#sobreMi").offset().top
        }, 1000);
    });

    $("#btnAsideSkills").click(function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#btnAsideProyectos").click(function(){
        $('html, body').animate({
            scrollTop: $("#proyectos").offset().top
        }, 1000);
    });
});