console.log("Hello, Cinefilo!");
//? SIMULADOR PARA COMPRAR  ENTRADAS DE  CINE

//Inicializar un array de objeto que contenga los datos para mostrar al final
const boleto = [];

//1. Crear un array de objetos que contenga los detalles de las películas

const peliculas = [
  { id: 1, nombre: "Flow", hora: "16:00", precio: 4500 },
  { id: 2, nombre: "Anora", hora: "17:00", precio: 5000 },
  { id: 3, nombre: "Código Negro", hora: "17:30", precio: 6000 },
  { id: 4, nombre: "El Mono", hora: "20:00", precio: 7000 },
  { id: 5, nombre: "El Rey de Reyes", hora: "22:00", precio: 8500 },
];

//2. Función Saludar, pide el nombre y devuelve un saludo completo
function saludar() {
  cliente = prompt("Ingresa tu nombre:").toUpperCase();
  return (saludo = console.log(
    `¡Hola ${cliente}, es el momento de disfrutar una buena peli!`
  ));
}
saludar();

//2. Función Flecha para para recrear el menú
const menu = () => {
  console.log(`${cliente}, estas son las películas disponibles:`);
  let i = 0;
  for (i = 0; i < peliculas.length; i++) {
    console.log(
      `${peliculas[i].id}\t${peliculas[i].nombre}\t${peliculas[i].hora}\t ${peliculas[i].precio}`
    );
  }
};

//3. Función Flecha para la selección de película
console.log("*-*-*-*-*- Selección de película *-*-*-*-*-");

const seleccion = () => {
  let peliculaSeleccionada;
  let encontrada = false;

  do {
    peliculaSeleccionada = Number(
      prompt(`${cliente} Ingresa el número de la película que deseas ver:`)
    );
    for (let i = 0; i < peliculas.length; i++) {
      if (peliculaSeleccionada === peliculas[i].id) {
        console.log("*-*-*-*-*-*-*-*-*-*-");

        console.log(`${cliente} seleccionaste ${peliculas[i].nombre}`);
        encontrada = true;
        break;
      }
    }
    // Si no se encuentra la película, mostrar mensaje de error
    if (encontrada === false) {
      console.log("¡Lo siento, la película no existe o no está disponible!");
      alert("¡Lo siento, la película no existe o no está disponible!");
    }
  } while (encontrada === false);
  return peliculaSeleccionada;
};

// 5. Preguntar cuantos boletos desea comprar
function cantidadEntradas(cliente, pelicula) {
  const cantidad = Number(
    prompt(
      `${cliente} Cuantas entradas quieres para ${
        peliculas[eleccion - 1].nombre
      }?`
    )
  );
  if (cantidad <= 0) {
    alert("La cantidad deber ser mayor a 0");
  }
  alert(
    `${cliente} confirmas que quieres comprar ${cantidad} entradas para ${
      peliculas[eleccion - 1].nombre
    }`
  );
  console.log("*-*-*-*-*-*-*-*-*-*-");
  console.log(
    `compraste ${cantidad} entradas para ${peliculas[eleccion - 1].nombre}`
  );
  return cantidad;
}
menu();
const eleccion = seleccion();
const cantidad = cantidadEntradas(cliente);

//6. Calcular el total de las entradas
const total = (peliculas, cantidad) => {
  if (!cantidad) {
    console.log(
      "No se puede calcular el total porque la cantidad es inválida."
    );
    return;
  }

  const precio = Number(peliculas[eleccion - 1].precio * cantidad);
  console.log("*-*-*-*-*-*-*-*-*-*-");
  console.log(
    `El total a pagar por ${cantidad} entradas para ${
      peliculas[eleccion - 1].nombre
    } es de $${precio}`
  );
  alert(
    `El total a pagar por ${cantidad} entradas para ${
      peliculas[eleccion - 1].nombre
    } es de $${precio}`
  );
  return precio; /*este retorno lo guardo en una consta para usarlo fuera de la funcion*/
};
const precioTotal = total(peliculas, cantidad);

//7. Creo un array de boletos con todos los datos de la compra
const agregarBoleto = (cliente, peliculaId, cantidad, total) => {
  const pelicula = peliculas.find((p) => p.id === peliculaId); //* se puede usar el metodo find para buscar el elemento dendtro del array*/
  const nuevoBoleto = {
    cliente: cliente,
    pelicula: pelicula.nombre,
    hora: pelicula.hora,
    cantidad: cantidad,
    total: total,
  };
  boleto.push({
    //* se puede usar el metodo push para agregar un elemento dendtro del array*/
    nuevoBoleto,
  });
  alert(`Boleto agregado:
Cliente: ${nuevoBoleto.cliente}
Película: ${nuevoBoleto.pelicula}
Hora: ${nuevoBoleto.hora}
Cantidad: ${nuevoBoleto.cantidad}
Total: $${nuevoBoleto.total}`);
  return nuevoBoleto; //*este retorno lo guardo en una consta para usarlo fuera de la funcion*/
};

const boletoGenerado = agregarBoleto(cliente, eleccion, cantidad, precioTotal);

console.log("Boleto generado:", boletoGenerado);
