/**
 * Mejorar el calendario creado añadiendo las opciones necesarias para que muestre el siguiente
 * aspecto:
 * 
 * @author Miguel Ángel Gavilán Merino
 */
{
    window.onload = function () {
        Calendar.setup({
            inputField: "fecha",
            ifFormat: "%d/%m/%Y",
            daFormat: "%A, %d de %B de %Y",
            button: "selector",
            displayArea: "fecha_usuario",
            weekNumbers: false
        });
    }
}