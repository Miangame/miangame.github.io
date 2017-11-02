/**
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let coches = ["renault", "mercedes", "seat", "fiat"];
    let coche = {marca: "Seat", modelo: "Ibiza", matricula: "1234ABC"};
    let parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "0 in coches = " + (0 in coches) +
        "<br>3 in coches = " + (3 in coches) +
        "<br>6 in coches = " + (6 in coches)+
        "<br>length in coches = " + (length in coches) +
        "<br><br>Marca in coche = " + ("marca" in coche) + 
        "<br>Modelo in coche = " + ("modelo" in coche) + 
        "<br>Motor in coche = " + ("motor" in coche);
}