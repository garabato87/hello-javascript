/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma (a,b){
    return a+b
}
console.log(suma(2,3));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNum = [1, 2, 4, 6, 8, 10, 16, 18]
let arrayNum2 = [1, 10, 122, 124, 423]
function mayor (array){
    let may = 0
    array.forEach((num) =>{
        if(num > may){
            may = num
        }
    })
    console.log(may);
    /*for(num of arrayNum){
        if(num > may){
            may = num
        }
    }
    console.log(may);*/

}
mayor(arrayNum)
mayor(arrayNum2)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let stringVocal = "Hola, cuantas vocales tengo?"

function sumVocales (string){
    let suma = 0
    let vocales = ["a", "e", "i", "o", "u"]
    for(let letras of string){
        if(vocales.includes(letras)){
            suma++;
        }
    }
    console.log(suma);
}
sumVocales(stringVocal)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function stringMayus(string){
    let mayus = ""
    mayus = string.toUpperCase()
    console.log(mayus);
}
stringMayus(stringVocal)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario



// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let arrayNum1 = [1,3,5,7,9,13]
let arrayNum3 = [1,5,7,11,13]

function returnArray(array1, array2){
    let arrayComun = []
    for(let num of array1){
        if(array2.includes(num)){
            arrayComun.push(num)
        }
    }
    console.log(arrayComun);
}
returnArray(arrayNum1, arrayNum3)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arraySumPar = [1,2,4,6,10,11,13,16]

function sumPar(array){
    let total = 0
    for(let num of array){
        if(num % 2 ==0){
            total += num
        }
    }
    console.log(total);
    
}
sumPar(arraySumPar)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadradoArray(array){
    let newArray = []
    for(let num of array){
        newArray.push(num**2)
    }
    console.log(newArray);
    
}
cuadradoArray(arraySumPar)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let string = "Hola, esta es una cadena de texto"

function inverso(string){

    //dividir las palabras en un array
    let palabras = string.split(" ")
    // invertir el array
    let palabrasInvertidas = palabras.reverse()
    console.log(palabrasInvertidas);
}
inverso(string)



// 10. Crea una función que calcule el factorial de un número dado

function factorial(num){
    let total = 1
    
    for(let i = num; i>0; i--){
        total *= i
    }
    console.log(total);
    
}
factorial(5)