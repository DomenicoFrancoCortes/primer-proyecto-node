const usuarios = require('./usuarios.json');
//const fs = require('fs');



setTimeout(() => {
    console.log('Cargando Sistema . . .');
  }, 1000);
setTimeout(() => {
    console.log('Bienvenido al Sistema Dom Version 1.0');
  }, 6000);

  setTimeout(() => {
    console.log('Cargando la informacion de los usuarios . . .');
  }, 9000);
setTimeout(() => {
  // Mostrar la información de los usuarios por consola
console.log('Información de los usuarios:');
console.log('===========================');
usuarios.forEach(usuario => {
  console.log(` |______________________________`);
  console.log(` | Id: ${usuario.id}`);
  console.log(` |Nombre: ${usuario.nombre}`);
  console.log(` |Apellido: ${usuario.apellidos}`);
  console.log(` |______________________________`);
});
console.log('===========================');
}, 11000);



