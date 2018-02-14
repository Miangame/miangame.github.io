$(function () {
    $("#inputBusqueda").on("keyup", function () {
        $.ajax({
            type: "GET",
            url: "alumnos.php",
            success: function (response) {
                $("#alumnos").html(response);
            }
        })
    });
});