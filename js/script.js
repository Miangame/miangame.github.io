$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".barra").each(function () {
                var percentage = parseInt($(this).html());
                if (percentage > 0) {
                    $(this).animate({ 'width': '' + percentage + '%' }, 2000);
                } else {
                    $(this).css({ 'color': 'black', 'background': 'none' }, 800);
                }
            })
        }
    });

    $("#btnAsideSobre").click(function () {
        $('html, body').animate({
            scrollTop: $("#sobreMi").offset().top
        }, 1000);
    });

    $("#btnAsideSkills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#btnAsideProyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#proyectos").offset().top
        }, 1000);
    });
});