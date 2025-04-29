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

//5. Función para validar los datos de entrada en la selección de películas y cantidad de entradas
function validarEntrada(valor) {
  if (valor === "" || valor === null || valor === undefined) {
    return false; // Vacío o nulo
  }
  if (Number(valor) <= 0) {
    return false; // Menor o igual a 0
  }
  return true;
}

//2. Función Saludar, pide el nombre y devuelve un saludo completo
function saludar() {
  let cliente = ""; // Defino la variable cliente fuera para poder usarla en todo el código
  do {
    cliente = prompt("Ingresa tu nombre:");
    if (!validarEntrada(cliente)) {
      alert("Debes ingresar un nombre válido.");
      cliente = null; // Repetir si es inválido
    }
  } while (cliente === null);

  cliente = cliente.toUpperCase();
  console.log(`¡Hola ${cliente}, es el momento de disfrutar una buena peli!`);
  return cliente;
}

//3. Función Flecha para para recrear el menú
const menu = (cliente) => {
  console.log(`${cliente}, estas son las películas disponibles:`);
  let i = 0;
  for (i = 0; i < peliculas.length; i++) {
    console.log(
      `${peliculas[i].id}\t${peliculas[i].nombre}\t${peliculas[i].hora}\t ${peliculas[i].precio}`
    );
  }
};

//4. Función Flecha para la selección de película
console.log("*-*-*-*-*- Selección de película *-*-*-*-*-");

const seleccion = () => {
  let peliculaSeleccionada;
  let encontrada = false;

  do {
    peliculaSeleccionada = prompt(
      `${cliente} Ingresa el número de la película que deseas ver:`
    );

    if (!validarEntrada(peliculaSeleccionada)) {
      alert("Por favor, ingresa un número válido de película.");
      peliculaSeleccionada = null;
      continue; // Saltar al siguiente ciclo
    }

    peliculaSeleccionada = Number(peliculaSeleccionada);
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

// 6. Preguntar cuantos boletos desea comprar
function cantidadEntradas(cliente, pelicula) {
  let cantidad;
  do {
    cantidad = prompt(
      `${cliente}, ¿cuántas entradas quieres para ${
        peliculas[pelicula - 1].nombre
      }?`
    );

    if (!validarEntrada(cantidad)) {
      alert("Por favor, ingresa una cantidad válida mayor a 0.");
      cantidad = null;
    }
  } while (cantidad === null);

  cantidad = Number(cantidad);
  console.log(`*-*-*-*-*-*-*-*-*-*-`);
  console.log(
    `Compraste ${cantidad} entradas para ${peliculas[pelicula - 1].nombre}`
  );
  alert(
    `Confirmas que quieres comprar ${cantidad} entradas para ${
      peliculas[pelicula - 1].nombre
    }`
  );
  return cantidad;
}

//7. Calcular el total de las entradas
const total = (peliculasId, cantidad) => {
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

//8. Creo un array de boletos con todos los datos de la compra
const agregarBoleto = (cliente, peliculaId, cantidad, total) => {
  const pelicula = peliculas.find((p) => p.id === peliculaId); //* se puede usar el metodo find para buscar el elemento dendtro del array*/
  const nuevoBoleto = {
    cliente: cliente,
    pelicula: pelicula.nombre,
    hora: pelicula.hora,
    cantidad: cantidad,
    total: total,
  };
  boleto.push(nuevoBoleto); //* se puede usar el metodo push para agregar un elemento dentro del array*/

  alert(`Boleto agregado:
Cliente: ${nuevoBoleto.cliente}
Película: ${nuevoBoleto.pelicula}
Hora: ${nuevoBoleto.hora}
Cantidad: ${nuevoBoleto.cantidad}
Total: $${nuevoBoleto.total}`);
  return nuevoBoleto; //*este retorno lo guardo en una consta para usarlo fuera de la funcion*/
};

const cliente = saludar();
menu(cliente);
const eleccion = seleccion(cliente);
const cantidad = cantidadEntradas(cliente, eleccion);
const precioTotal = total(eleccion, cantidad);
const boletoGenerado = agregarBoleto(cliente, eleccion, cantidad, precioTotal);

console.log("Boleto generado:", boletoGenerado);
