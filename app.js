// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/// Lista que almacenará los nombres
let listaDeAmigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    listaDeAmigos.push(nombre);
    input.value = '';
    input.focus();

    // Llamamos a la función que renderiza toda la lista
    mostrarListaAmigos();
}


// Función para sortear un nombre
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // 1. Validar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos uno.');
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // 3. Obtener el nombre sorteado
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // 4. Mostrar el resultado en pantalla
    resultado.innerHTML = `
        <li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>
    `;
}


function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');

    // 1. Limpiar la lista existente
    lista.innerHTML = '';

    // 2. Iterar sobre el arreglo y crear elementos <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigo = listaDeAmigos[i];

        const item = document.createElement('li');
        item.textContent = amigo;

        // 3. Agregar el <li> a la lista
        lista.appendChild(item);
    }
}
