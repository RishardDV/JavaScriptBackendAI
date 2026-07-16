
function mostrarMenu() {
  console.log("\n--- BARBERÍA AL ESTILO ---");
  console.log("1. Agendar cita");
  console.log("2. Ver agenda");
  console.log("3. Atender cita");
  console.log("4. Cancelar cita");
  console.log("5. Salir");
}

function mostrarCitas(lista){
  if(lista.length === 0){
    console.log("No hay citas registradas.");
    return;
  }
  for(let i=0;i<lista.length;i++){
    const t = lista[i];
    let estado;
    if(t.atendido){
      estado = "[✓]";
    }else{
      estado = "[ ]"
    }
    console.log((i+1) + ". Nombre del cliente: "+ t.clienteNombre + "\n Servicio: " + t.servicio + "\n Hora reserva: " + t.hora + "\n Estado: " + estado + ".");
    console.log("");
  }
   
}




const servicios = [
    "Corte sencillo sin barba",
    "Corte con barba",
    "Arreglo de barba",
    "Corte infantil",
    "Perfilado de cejas"
];

function cortesCabello(){
    console.log("\n--- Elige tu servicio ---");
    console.log("1. Corte sencillo sin barba");
    console.log("2. Corte con barba");
    console.log("3. Arreglo de barba");
    console.log("4. Corte infantil");
    console.log("5. Perfilado de cejas");
    console.log("");
}



module.exports = { mostrarMenu, mostrarCitas, cortesCabello, servicios};

