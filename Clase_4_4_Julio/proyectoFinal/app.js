const prompt = require("prompt-sync")();
const tareas = require("./tareas.js");
const interfaz = require("./interfaz.js");

const lista = [];

while (true) {
  interfaz.mostrarMenu();
  const opcion = prompt("Elige una opción: ");

  switch (opcion) {
    case "1": {
      const titulo = prompt("Título: ");
      if (titulo.trim() === "") {
        console.log("El título no puede estar vacío.");
        break;
      }
      const prioridad = prompt("Prioridad (alta/media/baja): ");
      tareas.agregarTarea(lista, titulo, prioridad);
      console.log("Tarea agregada.");
      break;
    }
    case "2":
      interfaz.mostrarTareas(lista);
      break;
    case "3": {
      const num = Number(prompt("Número a completar: "));
      const completada = tareas.completarTarea(lista, num - 1);
      if (completada === true) {
        console.log("Tarea completada.");
      } else {
        console.log("Esa tarea no existe.");
      }
      break;
    }
    case "4": {
      const num = Number(prompt("Número a eliminar: "));
      const eliminada = tareas.eliminarTarea(lista, num - 1);
      if (eliminada === true) {
        console.log("Tarea eliminada.");
      } else {
        console.log("Esa tarea no existe.");
      }
      break;
    }
    case "5":
      console.log("Hasta luego.");
      break;
    default:
      console.log("Opción no válida.");
  }

  if (opcion === "5") break;
}