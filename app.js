// Sortea un amigo de manera aleatoria y muestra el resultado
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indice];
    // Mostrar el resultado en el elemento resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombre);
    console.log(amigos);
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
    // Mostrar la lista actualizada
    mostrarListaAmigos();
}

// Muestra la lista de amigos en la página
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo y agregar elementos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function mostrarAmigos() {
    console.log("Lista de amigos:");
    amigos.forEach(function(amigo) {
        console.log(amigo);
    });
}
