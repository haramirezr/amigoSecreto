// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Referencias a los elementos del DOM
const inputNombre = document.getElementById('nombre');
const botonAdicionar = document.getElementById('adicionar');
const listaNombres = document.getElementById('lista');
const botonSortear = document.getElementById('sortear');
const resultado = document.getElementById('resultado');

// Arreglo para almacenar los nombres ingresados
let nombres = [];

// Evento para agregar nombre a la lista
botonAdicionar.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // Agrega nombre al arreglo
  nombres.push(nombre);

  // Crea un nuevo elemento en la lista visible
  const item = document.createElement('li');
  item.textContent = nombre;
  listaNombres.appendChild(item);

  // Limpia el input
  inputNombre.value = '';
  inputNombre.focus();
});

// Evento para sortear un nombre aleatorio
botonSortear.addEventListener('click', () => {
  if (nombres.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre.');
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indice];

  resultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
});
