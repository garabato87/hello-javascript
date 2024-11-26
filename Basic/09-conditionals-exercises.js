/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Braian"
if(myName == "Braian") console.log(myName);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "usuario"
let password = "password"
let user1 = "usuario"
let password1 = "password"
if(user1 == user & password1 == password) console.log("El usuario y contraseña son correctos");

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5
if(number >0) {
    console.log("el numero es positivo");
    
}else if(number == 0){
    console.log("el numero es cero");
    
}else {
    console.log("el numero es negativo");
    
}
console.log(number);

    
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadBraian = 17
let edadGuada = 16

if (edadBraian >= 18) {
    console.log("si puede votar, tiene:",edadBraian,"años");
} else {
    let edadFaltante = 18 - edadBraian ;
    console.log(`No puede votar, le faltan: ${edadFaltante} años`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age = 20
const message = age >= 18 ? "La persona es adulta" : "La persona es menor"
console.log(message);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "diciembre"

if (mes == "diciembre" || mes == "enero" || mes == "febrero") {
    console.log("Nos encontramos en verano");

} else if (mes == "marzo" || mes == "abril" || mes == "mayo") {
    console.log("Nos encontramos en otoño");

} else if (mes == "junio" || mes == "julio" || mes == "agosto") {
    console.log("Nos encontramos en invierno");
    
} else {
    console.log("Nos encontramos en primavera");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "enero" || mes=="marzo" || mes=="mayo" || mes=="julio" || mes== "agosto"|| mes== "octubre"||mes=="diciembre"){
    console.log(`El mes de ${mes} tiene 31 dias`);
    
}else if (mes== "febrero"){
    console.log(`El mes de ${mes} tiene 28 dias`);
    
}else {
    console.log(`El mes de ${mes} tiene 30 dias`);
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "english"
let languageName

switch (language) {
    case "english":
        languageName = "Idioma: ingles"
        break
    case spanish:
        languageName = "Idioma: Español"
        break
   
    default:
        languageName = "idioma incorrecto"
}
console.log(languageName);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = "marzo"
let estacion

switch(mes){
    case "diciembre":
    case "enero":
    case "febrero":
        estacion = "Estacion: verano"
        break
    case "marzo":
    case "abril":
    case "mayo":
        estacion = "Estacion: otoño"
        break
    case "junio":
    case "julio":
    case "agosto":
        estacion= "Estacion: invierno"
        break
    case "septiembre":
    case "octubre":
    case "noviembre":
        estacion= "Estacion: primavera"
        break
    default:
        estacion = "Estacion indefinida"
}
console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

