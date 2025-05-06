const num1 = parseInt(prompt("Ingrese un numero entero positivo"));
const num2 = parseInt(prompt("Ingrese un numero entero positivo"));
const num3 = parseInt(prompt("Ingrese un numero entero positivo"));

var arreglo = [];
arreglo.push(num1);
arreglo.push(num2);
arreglo.push(num3);

arreglo = arreglo.sort((a,b) => b - a);
console.log(arreglo);

let resultado = "";
for (let i = 0; i < arreglo.length - 1; i++) {

    if(arreglo[i] > arreglo[i + 1]){
        resultado = resultado.concat(arreglo[i] + " Es mayor que " + arreglo[i + 1] + ", ");
    }
    else if (arreglo[i] = arreglo[i + 1]){
        resultado = resultado.concat(arreglo[i + 1] + " Es igual que " + arreglo[i] + ", ");
    }

} 
console.log(resultado);

