{
    let btnAddTarea = document.getElementById("addTarea");
    let form = document.getElementById("formOculto");

    let titulo = document.getElementById("titulo");
    let fecha = document.getElementById("fecha");
    let asignatura = document.getElementById("asignaturaAdd");
    let tarea = document.getElementById("tarea");
    let btnEnviar = document.getElementById("enviar")

    let section = document.getElementById("seccion");
    

    let aniadirArticle = function () {
        if (titulo.value == "" || fecha.value == "" || tarea.value == "") {
            return;
        }
        
        let article = document.createElement("article");
        let header = document.createElement("header");
        let h2 = document.createElement("h2");
        let h5 = document.createElement("h5");
        let parrafo = document.createElement("p");
        let imagenChincheta = document.createElement("img");
        let imagenMod = document.createElement("img");
        let imagenEliminar = document.createElement("img");
        let enlace = document.createElement("a");
        let enlace2 = document.createElement("a");

        imagenChincheta.id = "chincheta";
        imagenMod.id = "modificar";
        imagenEliminar.id = "eliminar";

        if (asignatura.value == "diweb") {
            article.className = "diweb";
        } else if (asignatura.value == "dwes") {
            article.className = "dwes";
        } else if (asignatura.value == "dwec") {
            article.className = "dwec";
        } else {
            article.className = "android";
        }

        imagenChincheta.src = "images/chincheta.png";
        imagenMod.src = "images/modificar.png";
        imagenEliminar.src = "images/eliminar.png";
        enlace.href = "#";
        enlace2.href = "#";

        enlace.appendChild(imagenMod);
        enlace.appendChild(imagenEliminar);

        h2.appendChild(document.createTextNode(titulo.value));
        h5.appendChild(document.createTextNode("Fecha de entrega: " + fecha.value));
        parrafo.appendChild(document.createTextNode(tarea.value));
        header.appendChild(h2);
        header.appendChild(h5);

        article.appendChild(imagenChincheta);
        article.appendChild(enlace);
        article.appendChild(enlace2);
        article.appendChild(header);
        article.appendChild(parrafo);

        section.appendChild(article);

        mostrarForm();
    }

    let mostrarForm = function () {
        if (form.style.display == "block") {
            form.style.display = "none";
        } else {
            form.style.display = "block";
        }
    }



    btnAddTarea.addEventListener("click", mostrarForm);
    btnEnviar.addEventListener("click", aniadirArticle);
}