const prompt = require("prompt-sync")();
const citas = require("./citas.js");
const interfaz = require("./interfaz.js");

//Tareas a resolver: Agendar citas, Ver agenda, Atender cita, Cancelar cita, Salir

const lista = [];
while(true) {
  interfaz.mostrarMenu();
  console.log("");
  const opcion = Number(prompt("Elige una opción: "));
 
  switch(opcion){
    case 1:
      console.log("");
      const nombre = prompt("Nombre: ");
      console.log("");
      if(!nombre.trim()){
        console.log("El nombre del clíente está vacío");
        console.log("");
        break;
      }
      interfaz.cortesCabello();
      
      const opcionServicio = Number(prompt("Selecciona el corte de cabello: "));
      console.log("");
      
      if(opcionServicio < 1 || opcionServicio >  interfaz.servicios.length){
        console.log("Número inválido de servicio.");
          break;
      }
      const servicio = interfaz.servicios[opcionServicio - 1];
     
      const hora = (prompt("Hora: "));
      const horaConvertida = citas.convertirHoras(hora);
      let tiempoReserva = citas.tiempoReserva(lista, horaConvertida);
      if (!tiempoReserva) {
        console.log("La hora ya está ocupada.");
        break;
      }

      citas.agendarCita(lista, nombre, servicio, hora);
      
      console.log("Cita agendada.");
    break;
    case 2:
      
      console.log("------------------------")
      interfaz.mostrarCitas(lista);
      console.log("");
      citas.resumen(lista);
      const{atendidas, pendientes} = citas.resumen(lista);
      console.log("Resumen de citas:");
      console.log("- Atendidas: " + atendidas);
      console.log("- Pendientes: " + pendientes);
      console.log("------------------------")
    break;

    case 3:
      const numeroAtender = prompt("Ingresa el numero de la cita a atender: ");
      const atender = citas.atendido(lista, numeroAtender - 1);
      
    break;
    
    case 4:
      const indice = Number(prompt("Introduce el número de la cita a cancelar: "));
      const cancelar = citas.cancelarCita(lista, indice-1);
      if(cancelar){
        console.log("Cita #" + indice + " acaba de ser cancelada.");
        
      }else{
        console.log("Número de cita inválido.");
      }      
    break;

    case 5:
      console.log("Hasta luego.");
    break;
  }

    if(opcion === 5) break;
}
