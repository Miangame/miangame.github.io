/**
* Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura y que permita crear objetos
* de ese tipo. Se deben utilizar las funciones constructoras y la propiedad prototype. Para instanciar la clase, se
* debe utilizar la instrucción Factura(cliente, elementos), donde cliente también es una pseudoclase que guarda los
* datos del cliente y elementos es un array simple que contiene las pseudoclases de todos los elementos que forman
* la factura.
*
* @author Miguel Ángel Gavilán Merino
*/

{
    let parrafo = document.getElementById("parrafo");
    let cadena = "";

    let cliente = function (nombre, direccion, telefono, dni) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.dni = dni;
    };

    let producto = function (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    };

    let factura = function (cliente, productos) {
        this.id = factura.prototype.contador++;
        this.cliente = cliente;
        this.productos = productos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0
        };
    };

    factura.prototype.contador = 1;

    factura.prototype.empresa = {
        nombre: "",
        direccion: "",
        telefono: "",
        nif: ""
    };

    factura.prototype.calculaTotal = function () {
        for (let i = 0; i < this.productos.length; i++) {
            this.informacion.baseImponible += this.productos[i].cantidad * this.productos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible + (this.informacion.baseImponible * this.informacion.iva) / 100;
    }

    factura.prototype.muestraTotal = function () {
        this.calculaTotal();
        document.body.appendChild(document.createTextNode("TOTAL (Con I.V.A) = " + this.informacion.total + " euros"));
    }

    factura.prototype.muestraFactura = function () {

        let p = document.createElement("p");
        p.appendChild(document.createTextNode("Número de factura: " + this.id));
        parrafo.appendChild(p);
        mostrarCliente(this.cliente);
        mostrarProductos(this.productos);
        this.muestraTotal();
    }

    let mostrarCliente = function (cliente) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        let datosCliente;
        legend.appendChild(document.createTextNode("Datos del cliente"));
        datosCliente = document.createTextNode("Nombre: " + cliente.nombre + " Dirección: " + cliente.direccion + " Teléfono: " + cliente.telefono + " DNI: " + cliente.dni);
        fieldset.appendChild(legend);
        fieldset.appendChild(datosCliente);
        parrafo.appendChild(fieldset);
    }

    let mostrarProductos = function (productos) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        let datos;
        let ul = document.createElement("ul");
        let li;

        legend.appendChild(document.createTextNode("Productos"));

        productos.forEach(element => {
            li = document.createElement("li");
            datos = document.createTextNode("Descripción: " + element.descripcion + " Cantidad: " + element.cantidad + " Precio unitario: " + element.precio + " Precio total: " + (element.precio * element.cantidad));
            li.appendChild(datos);
            ul.appendChild(li);
        });

        fieldset.appendChild(ul);
        fieldset.appendChild(legend);
        parrafo.appendChild(fieldset);
    }

    // Creación de una factura
    let cliente1 = new cliente("Miguel", "c/Carrera", "611111111", "11111111-A");
    let elementos = [new producto("PS4", "1", "300"), new producto("Nintendo Switch", "2", "180"), new producto("PC", "1", "520")];
    let factura1 = new factura(cliente1, elementos);

    factura1.muestraFactura();
}