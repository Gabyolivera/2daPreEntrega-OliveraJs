class Pack {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Llamada {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class CarritoPacks {
    constructor() {
        this.packs = [];
        this.llamadas = [];
        this.totalPacks = 0;
        this.totalLlamadas = 0;
    }

    agregarPack(pack) {
        this.packs.push(pack);
    }

    agregarLlamada(llamada) {
        this.llamadas.push(llamada);
    }

    mostrarPacksInternet() {
        let mensaje = "Seleccione el pack que desea agregar:\n\n";

        this.packs.forEach(pack => {
            mensaje += `${pack.id} - ${pack.nombre} - $${pack.precio}\n`;
        });

        const seleccion = parseInt(prompt(mensaje));
        const packSeleccionado = this.packs.find(pack => pack.id === seleccion);

        if (packSeleccionado) {
            this.agregarPack(packSeleccionado);
            this.totalPacks += packSeleccionado.precio;
            alert(`Se ha agregado "${packSeleccionado.nombre}" al carrito.`);
        } else {
            alert("Opción inválida.");
        }

        const continuarComprando = confirm("¿Desea seguir comprando packs?");
        if (continuarComprando) {
            this.mostrarPacksInternet();
        } else {
            this.mostrarPacksLlamadas();
        }
    }

    mostrarPacksLlamadas() {
        let mensaje = "Seleccione el pack de llamadas que desea agregar:\n\n";

        this.llamadas.forEach(llamada => {
            mensaje += `${llamada.id} - ${llamada.nombre} - $${llamada.precio}\n`;
        });

        const seleccion = parseInt(prompt(mensaje));
        const llamadaSeleccionada = this.llamadas.find(llamada => llamada.id === seleccion);

        if (llamadaSeleccionada) {
            this.agregarLlamada(llamadaSeleccionada);
            this.totalLlamadas += llamadaSeleccionada.precio;
            alert(`Se ha agregado "${llamadaSeleccionada.nombre}" al carrito.`);
        } else {
            alert("Opción inválida.");
        }

        const continuarComprando = confirm("¿Desea seguir comprando?");
        if (continuarComprando) {
            this.mostrarPacksLlamadas();
        } else {
            this.mostrarResumen();
        }
    }

    mostrarResumen() {
        let detallePacks = "";
        this.packs.forEach(pack => {
            detallePacks += `${pack.nombre} - $${pack.precio}\n`;
        });

        let detalleLlamadas = "";
        this.llamadas.forEach(llamada => {
            detalleLlamadas += `${llamada.nombre} - $${llamada.precio}\n`;
        });

        alert(`Detalle Packs:\n${detallePacks}\nDetalle Llamadas:\n${detalleLlamadas}\nTotal Packs: $${this.totalPacks}\nTotal Llamadas: $${this.totalLlamadas}`);
    }
}

const gigas1 = new Pack(1, "1 Giga x 7 dias", 820);
const gigas2 = new Pack(2, "10 Gigas x 15 dias", 3500);
const gigas3 = new Pack(3, "25 gigas x 30 dias", 8500);

const llamadas1 = new Llamada(4, "1000 minutos para hablar", 1800);
const llamadas2 = new Llamada(5, "500 minutos para hablar", 1000);

const carrito = new CarritoPacks();

carrito.agregarPack(gigas1);
carrito.agregarPack(gigas2);
carrito.agregarPack(gigas3);

carrito.mostrarPacksInternet();

carrito.agregarLlamada(llamadas1);
carrito.agregarLlamada(llamadas2);

carrito.mostrarResumen();
