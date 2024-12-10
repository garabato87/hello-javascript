/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i= 1; i < 21 ; i++ ){
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total = 0
for(let i= 1; i < 101 ; i++){
    total += i
}
console.log(total);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let par
for (let i = 1; i<51 ; i++){
    par = i
    if(par%2==0){
        console.log(par);
        
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = ["braian", "martin", "mili", "salo", "magui", "javi"]

names.forEach(nombres =>{
    console.log(nombres);
    
})
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocal = ["a", "e", "i", "o", "u"]

let string = "Hola, esta es una cadena de texto"

let cantVocal = 0

string.toLocaleLowerCase().split("").forEach(letra =>{
    if(vocal.includes(letra)){
        cantVocal += 1
    }
    
})

console.log(cantVocal);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5]

let resultado = 1

numeros.forEach(num =>{
    resultado *= num 
})
console.log(`El resultado es ${resultado}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5 
let multPorCinco = 5
for(let i=1 ; i<11; i++){
    
    console.log(`5x${i}= ${5*i}`)
     
}

// 8. Usa un bucle para invertir una cadena de texto

let chainText = "Hola, esta es una cadena de texto"

let reversedText= ""

for(let i=chainText.length-1; i>=0 ; i--){
    reversedText += chainText[i]
}
console.log(reversedText);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosArray = [1, 10, 12, 17, 16 , 20]
let numerosMay = []

numerosArray.forEach((num)=> {
    if(num>10){
        numerosMay.push(num)
    }
})
console.log(numerosMay);