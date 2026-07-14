function agregarTarea(lista, titulo, prioridad) {
  lista.push({ titulo: titulo, prioridad: prioridad, completada: false });
}

function completarTarea(lista, indice) {
  if (indice < 0 || indice >= lista.length) return false;
  lista[indice].completada = true;
  return true;
}

function eliminarTarea(lista, indice) {
  if (indice < 0 || indice >= lista.length) return false;
  lista.splice(indice, 1);
  return true;
}

module.exports = { agregarTarea, completarTarea, eliminarTarea };