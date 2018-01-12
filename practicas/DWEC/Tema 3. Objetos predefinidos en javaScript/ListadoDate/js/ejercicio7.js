/**
 * Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. 
 * En caso de que el argumento no sea una fecha, que salte una excepción. 
 * Admitirá tantos parámetros como el constructor Date(). Pruébalo con varias invocaciones fallidas (y capturadas)
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");
    let cadena = "";

    let esBisiesto = function (cadena) {
        let a = new Date(cadena);
        if (a == "Invalid Date") {
            throw {message: 'Mal'};
        } else {
            let anno = a.getFullYear();

            if (((anno % 4 == 0) && ((anno % 100 != 0) || (anno % 400 == 0)))) {
                return "Es un año bisiesto";
            } else {
                return "No es un año bisiesto";
            }
        }
    }

    let FechaException = function (aviso) {
        this.aviso = aviso;
        this.nombre = "FechaException";
    }

    try{
        cadena += "Año bisiesto 2016: " + esBisiesto("2016") + "<br>";
        cadena += "Año bisiesto 2017: " + esBisiesto("2017") + "<br>";
        cadena += "esBisiesto(\"aaaa\"): " + esBisiesto("aaaa") + "<br>";
    
       
    }catch (e) {
        cadena += e.message;
    }

    parrafo.innerHTML = cadena;
}