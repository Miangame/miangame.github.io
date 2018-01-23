$(function(){
    $("a").each(function (i) {
        let titulo = $(this).prop("title");
        console.log("Atributo title del enlace " + i + ": " + titulo);
    });
});