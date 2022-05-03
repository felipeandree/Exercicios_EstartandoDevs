let vogais = ["a", "e", "i", "o", "u"]

function contarNumeroVogais(str) {
    let count = 0;

    for (let letras of str.toLowerCase()) {
        if (vogais.includes(letras)) {
            count++;
        }
    }

    return count
}


let string = "Borboleta"

let resultado = contarNumeroVogais(string);

console.log(resultado);
console.log("Felipe André, desenvolvedor")