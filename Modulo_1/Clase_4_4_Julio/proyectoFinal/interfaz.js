function mostrarMenu() {
  console.log("\n--- GESTOR DE TAREAS ---");
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
}

function mostrarTareas(lista) {
  if (lista.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }
  for (let i = 0; i < lista.length; i++) {
    const t = lista[i];
    let estado;
    if (t.completada === true) {
      estado = "[✓]";
    } else {
      estado = "[ ]";
    }
    console.log((i + 1) + ". " + estado + " " + t.titulo + " (" + t.prioridad + ")");
  }
}

module.exports = { mostrarMenu, mostrarTareas };