{
    let articulos = document.getElementsByTagName("article");
    let btnDiweb = document.getElementById("btnDiweb");
    let btnDwes = document.getElementById("btnDwes");
    let btnDwec = document.getElementById("btnDwec");
    let btnAndroid = document.getElementById("btnAndroid");
    let btnMostrarTodo = document.getElementById("btnMostrarTodo");

    let mostrarDiweb = function () {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "diweb") {
                articulos[i].style.display = "none";
            }
        }
    }

    let mostrarDwes = function () {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "dwes") {
                articulos[i].style.display = "none";
            }
        }
    }

    let mostrarDwec = function () {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "dwec") {
                articulos[i].style.display = "none";
            }
        }
    }

    let mostrarAndroid = function () {
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i].style.display != "block"){
                articulos[i].style.display = "block";
            }
            if (articulos[i].className !== "android") {
                articulos[i].style.display = "none";
            }
        }
    }

    let mostrarTodo = function () {
        for (let i = 0; i < articulos.length; i++) {
            articulos[i].style.display = "block";

        }
    }

    btnDiweb.addEventListener("click", mostrarDiweb);
    btnDwes.addEventListener("click", mostrarDwes);
    btnDwec.addEventListener("click", mostrarDwec);
    btnAndroid.addEventListener("click", mostrarAndroid);
    btnMostrarTodo.addEventListener("click", mostrarTodo);
}