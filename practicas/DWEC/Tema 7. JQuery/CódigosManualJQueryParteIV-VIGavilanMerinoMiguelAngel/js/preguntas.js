$(function () {
    $("input").change(function () {
        var $input = $(this);
        $("#accediendoAlChecked").html(
            ".selected: <b>" + $input.selected + "</b><br>" +
            ".prop( \"checked\" ): <b>" + $input.prop("checked") + "</b><br>" +
            ".attr( \"checked\" ): <b>" + $input.attr("checked") + "</b><br>" +
            ".checked(): <b>" + $input.checked + "</b>" +
            ".val(): <b>" + $input.val() + "</b>");
    }).change();


    $(".grupoCheckbox").change(function () {
        if (!this.checked) {
            $("input.grupoCheckbox").removeAttr("disabled");
        } else {
            $("input.grupoCheckbox").attr("disabled", true);
        }
    }).change();



    $("#eventos").on({
        click: function () {
            $("#eventos").html("Has hecho click");
        },
        dblclick: function () {
            $("#eventos").html("Has hecho doble-click");
        },
        mouseenter: function () {
            $("#eventos").html("Has entrado");
        },
        mouseleave: function () {
            $("#eventos").html("Has salido");
        }
    });

    $("#interfazEvent").click(function (evento) {
        $("#interfazEvent").html(
            "Coordenada X: " + evento.pageX + "<br/>" +
            "Coordenada Y: " + evento.pageY + "<br/>" +
            "CurrentTarget: " + evento.currentTarget + "<br/>" +
            "TimeStamp: " + evento.timeStamp);
    });
});



