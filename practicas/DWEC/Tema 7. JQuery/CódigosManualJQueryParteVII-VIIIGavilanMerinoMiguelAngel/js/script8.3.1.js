$(function () {
    $("#ocultartoda").click(function (e) {
        $("#milista").fadeOut();
    });
    $("#mostrartoda").click(function (e) {
        $("#milista").fadeIn();
    });
    $("#ocultarmostrar").click(function (e) {
        $("#milista").fadeOut(function () {
            $(this).fadeIn();
        });
    });
    
    $("#pororden").click(function (e) {
        let opacidad_deseada = $("#selopacidad").prop("value");
        $("#e1").fadeTo(500, opacidad_deseada, function () {
            $("#e2").fadeTo(500, opacidad_deseada, function () {
                $("#e3").fadeTo(500, opacidad_deseada);
            });
        });
    })
});

