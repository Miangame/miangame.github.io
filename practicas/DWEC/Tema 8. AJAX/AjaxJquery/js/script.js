$(function () {
    let estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
    let tiempoFinal;
    let tiempoInicial;

    String.prototype.transformaCaracteresEspeciales = function () {
        return unescape(escape(this).
            replace(/%0A/g, '<br/>').
            replace(/%3C/g, '&lt;').
            replace(/%3E/g, '&gt;'));
    }

    $("#botonMostrar").on("click", function () {
        tiempoInicial = new Date();
        $.ajax({
            type: "GET",
            url: $("#cajaURL").val(),
            dataType: "text",
            error: function (xhr) {
                tiempoFinal = new Date();
                $("#bCIzquierda1").html("");
                $("#bCIzquierda2").html(xhr.getAllResponseHeaders().transformaCaracteresEspeciales());
                $("#bCDerecha1").html("Estado: " + estadosPosibles[xhr.readyState]);
                $("#bCDerecha2").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
            }
        })
            .done(function (codigo, text, xhr) {
                tiempoFinal = new Date();
                $("#bCIzquierda1").html("<xmp>" + codigo + "</xmp>");
                $("#bCIzquierda2").html(xhr.getAllResponseHeaders().transformaCaracteresEspeciales());
                $("#bCDerecha1").html("Estado: " + estadosPosibles[xhr.readyState] + " [" + (tiempoFinal - tiempoInicial) + "mseg]");
                $("#bCDerecha2").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
            })
            .fail(function (xhr) {
                tiempoFinal = new Date();
                $("#contenido").html("");
                $("#bCIzquierda2").html(xhr.getAllResponseHeaders().transformaCaracteresEspeciales());
                $("#estado").html("Estado: " + estadosPosibles[xhr.readyState]);
                $("#estadoServidor").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
            });
    });

    $("#cajaURL").val(location.href);
});