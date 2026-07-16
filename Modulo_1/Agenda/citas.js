

function agendarCita(lista, clienteNombre, servicio, hora, atendido) {
  lista.push({ clienteNombre: clienteNombre, servicio: servicio, hora: hora, atendido: false });
}


function atendido(lista, indice) {
    if(indice <0 || indice>= lista.length){return false}
    lista[indice].atendido = true;
    return true;
}

function cancelarCita(lista, indice) { 
    if(indice <0 || indice >= lista.length) {return false}
 
      lista.splice(indice, 1);
      return true;
    
}

function convertirHoras(horas){
    let [h, m] = horas.split(":");
    h = parseInt(h);
    m = parseInt(m);
   
    return (h * 60) + m;
    
} 



 function tiempoReserva(lista, horas){
    let plazoHoras = horas + 30;
   for(let i=0;i<lista.length;i++){
      const t = lista[i];
      let horaConversion = convertirHoras(t.hora);
      let plazoHoraConversion = horaConversion+30;
      if(t.atendido === false){
        if(horas >= horaConversion && horas <= plazoHoraConversion){
          return false;
        }
        if(plazoHoras <= plazoHoraConversion && plazoHoras > horaConversion){
          return false;
        }
      }
      
    }
      return true;
      
  }

  function resumen(lista){
    let atendidas = 0;
    let pendientes = 0;
    for(let i=0;i<lista.length;i++){
      const t = lista[i];
      if(t.atendido){
         atendidas++;
      } else {
        pendientes++;
      }
    }
    return { atendidas, pendientes };
  }






module.exports = { agendarCita, atendido, cancelarCita, convertirHoras, tiempoReserva, resumen};






