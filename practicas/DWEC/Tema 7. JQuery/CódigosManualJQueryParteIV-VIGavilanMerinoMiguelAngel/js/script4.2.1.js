$(function () {
    $("input.fecha").prop("value", function (indice) {
        let f = new Date();
        return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    });
});