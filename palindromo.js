// realizar una funcion para que compare si una palabra e sun palindromo o no sin usar fnciones de js, 
//solo estructuras de control

function esPalindromo(palabra) {
    let invertida = palabra.split("").reverse().join("");

    return (invertida === palabra);
}

// console.log(esPalindromo("domenico"));
// console.log(esPalindromo("ana"));


function palindromo(palabra) {

    // aca creo un array de letras
    let letras = [];
    // aca creo un bucle para agarrar la palabra y agregarlo al array de letras
    // con la linea 21 agrego la palabra al array
    for (let i = 0; i < palabra.length; i++) {
        letras.push(palabra[i]);

    }
    // aca creo un array para invertir la palabra 
    let letrasInvertidas = [];
    // aca en este bucle agarramos la palabra y empezamos a iterar la palabra desde la ultima letra hasta la ultima letra
    // en la linea 29 agrego la palabra al array letrasInvertidas
    for (let i = letras.length - 1; i >= 0; i--) {
        letrasInvertidas.push(letras[i]);
    }
    // aca creo una variable string
    let palabraInvertida = "";
    // y aca en este bucle itero la palabra invertida para unir letra por letra
    // en la liena 36 agrego la palabra invertida a la variable palabraInvertida con el += voy uniendo letra por letra en cada iteracion
    for (let i = 0; i < letrasInvertidas.length; i++) {
        palabraInvertida += letrasInvertidas[i];

    }
    // con este return ya solo queda comprar la palabra orginal con la palabra invertida y si son iguales es palindromo
    return (palabra === palabraInvertida);
}
console.log(palindromo("domenico"));
