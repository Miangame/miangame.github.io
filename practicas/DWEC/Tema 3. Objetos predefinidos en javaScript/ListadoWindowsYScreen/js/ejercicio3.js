/**
 * Crea una página web con el siguiente comportamiento:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let bajarLinea = document.getElementById("bajarLinea");
    let subirLinea = document.getElementById("subirLinea");
    let bajarPagina = document.getElementById("bajarPagina");
    let subirPagina = document.getElementById("subirPagina");
    let inicio = document.getElementById("inicio");
    let fin = document.getElementById("fin");

    bajarLinea.onclick = () => { window.scrollTo(scrollX, scrollY + 20) };
    subirLinea.onclick = () => { window.scrollTo(scrollX, scrollY - 20) };
    bajarPagina.onclick = () => { window.scrollTo(scrollX, scrollY + window.innerHeight) };
    subirPagina.onclick = () => { window.scrollTo(scrollX, scrollY - window.innerHeight) };
    inicio.onclick = () => { window.scrollTo(scrollX, scrollY - window.document.body.scrollHeight) };
    fin.onclick = () => { window.scrollTo(scrollX, scrollY + window.document.body.scrollHeight) };
}