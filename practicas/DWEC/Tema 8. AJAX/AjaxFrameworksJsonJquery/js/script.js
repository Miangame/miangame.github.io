$(function () {
    let $titulo = $("h2 a");
    let idElemento;

    $("nav a").on("click", function (event) {
        event.preventDefault();
        idElemento = this.id;

        $.getJSON("frameworks.php", { nombre: idElemento })
            .done(cargarDatos)
            .fail(mensajeError);
    });

    let cargarDatos = function (data) {
        $titulo.html(data.nombre);
        $titulo.attr("href", data.url);
        $titulo.css("border-bottom", "3px solid blue");
        $("img").attr("src", data.imagen)
        $("#descripcion").html(data.descripcion);
    };

    let mensajeError = function () {
        $titulo.html("Error al obtener los datos");
    };

});