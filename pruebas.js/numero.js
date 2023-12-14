function encontrarMaximo(lista) {
    let maximo = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lita[i] > maximo) {
            maximo = lista [i];
        }
    }
    return maximo;
}
let numeros = [6, 8, 3, 9, 2,];
let maximoNumero = encontrarMaximo(numeros);
console.log("el numero maximo es: " + maximoNumero);