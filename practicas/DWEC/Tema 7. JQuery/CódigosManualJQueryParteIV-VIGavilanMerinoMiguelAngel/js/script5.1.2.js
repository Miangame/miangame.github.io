$(function () {
    $("#micapa").css({
        "background-color": "#ff8800",
        "position": "absolute",
        "width": "100px",
        "top": "100px",
        "left": "200px"
    });

    $("#micapa").mouseover(function () {
        antiguoLeft = parseInt($(this).css("left"));
        //alert (antiguoLeft);
        $(this).css("left", antiguoLeft + 10 + "px");
    });

    $("#micapa").click(function (e) {
        $(this).css("width", function (index, value) {
            let aumento = prompt("Cuanto quieres aumentar?", "25");

            return (parseInt(value) + parseInt(aumento)) + "px";
        });
    });

    $("#fondogris").click(function (e) {
        $("#micapa").css("background-color", "gray");
    });

    $("#fondonaranja").click(function (e) {
        $("#micapa").css("background-color", "orange");
    });

    $("#ocultarmostrar").click(function (e) {
        let estilo = $("#micapa").css("display");
        if (estilo == "block" || estilo == "") {
            $("#micapa").css("display", "none");
        } else {
            $("#micapa").css("display", "block");
        }
    });
});