/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto
let name = "Braian";
let lastName = "Alvarez";
let fullName = name + " " + lastName;
console.log(fullName);
// 2. Muestra la longitud de una cadena de texto
console.log(fullName.length);

// 3. Muestra el primer y último carácter de un string
console.log(fullName[0]);
console.log(fullName[13]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(fullName.toLocaleUpperCase()); //a mayuscula
console.log(fullName.toLocaleLowerCase()); //a minuscula

// 5. Crea una cadena de texto en varias líneas
let variasLineas = `
hola
esto es una cadena
de varias lineas
`
// 6. Interpola el valor de una variable en un string
let email = "alvarez.braian87@gmail.com"

console.log(`Hola, mi nombre es ${fullName} y mi email es: ${email}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let string = "Hola, debo reemplazar los espacios por guiones"
console.log(string.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(string.includes("no"));

// 9. Comprueba si dos strings son iguales
console.log(name === lastName);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(name.length === lastName.length);
