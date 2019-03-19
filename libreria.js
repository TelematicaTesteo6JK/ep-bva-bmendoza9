const validarNombre = (nombre)=>{

  if(nombre.length >= 6 && nombre.length <= 30){
    return true;
  }
  return false;
}
