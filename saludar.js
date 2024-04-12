
function saludar(nombre) {
  return `Hola ${nombre}`;
}
function despedir(nombre) {
  return `Adios ${nombre}`;
}
module.exports.saludar = saludar;
module.exports.despedir = despedir;


/*  esta seria la sintaxis para exportar las funciones como un objeto

module.exports ={
saludar: saludar,
 despedir: despedir
}*/