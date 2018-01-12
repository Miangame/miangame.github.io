{
    let enlace;
    let boton;

    let abrirTodoUnPoco = function (e) {
        e.preventDefault();
        window.open("ventanaTodoUnPoco.html", "");
    }

    let abrirFormulario = function () {
        window.open("ventanaFormulario.html", "Empleado");
    }

    let init = function () {
        enlace = document.getElementById("deTodo");
        boton = document.getElementById("empleado");
        enlace.addEventListener("click", abrirTodoUnPoco);
        boton.addEventListener("click", abrirFormulario);
    }

    window.onload = init;
}