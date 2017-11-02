/**
 * Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");

    setInterval(function () {
        let date = new Date();

        parrafo.innerHTML = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + " h";

    }, 1000);


}