/*Ejercicio: Crear una nueva carpeta donde irán generando los archivos para hacer los
ejercicios. Dentro de ella, crear un módulo llamado calculadora. Allí deben crear 5
funciones: sumar, restar, multiplicar, dividir y esParOImpar.
La función esParOImpar recibe un sólo parámetro numérico, y debe determinar si ese
número es par o impar (pista: usar operador %). Las otras funciones reciben 2 parámetros
numéricos, y tienen que realizar la operación matemática con esos parámetros y retornar el
resultado.
El módulo tiene que exportar un objeto con estas 5 funciones. Luego, crear un archivo
app.js, donde vamos a importar este módulo y acceder a las funciones para mostrar los
resultados por consola de todas las operaciones.*/

function sumar(num1, numb2){
    let resultado = num1 + numb2;
    return `El resultado de la suma es: ${resultado}`;
}
function restar(num1, numb2){
    let resultado = num1 - numb2;
    return `El resultado de la resta es: ${resultado}`;
}
function multiplicar(num1, numb2){
    let resultado = num1 * numb2;
    return `El resultado de la multiplicación es: ${resultado}`;
}
function dividir(num1, numb2){
    let resultado = num1 / numb2;
    return `El resultado de la división es: ${resultado}`
}
function esParOImpar(num1){

    let resultado = num1%2 ==0;
    return `El numero es: ${resultado}`;
}

//Crear un programa que determine si un número introducido en un 
    //Prompt es divisible por 5 o no, mostrar el resultado con console.log

    function div(num2){
return (num2%5) ==0;
    }
    
    /*Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.*/

    
module.exports ={
    sumar,
    restar,
    multiplicar,
    dividir,
    esParOImpar
    }

    

