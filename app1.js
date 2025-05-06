var num = Math.floor(Math.random() * (10 - 1) + 1);
var intentos = 5;
console.log(num);
var perdido = false;
var ganado = false;
while (input != num && intentos > 0){
    var input = parseInt(prompt(`
        Ingrese un numero de 1 a 10,
        te quedan: `
    + intentos));
    
    intentos--;

    if(input == num){
        ganado = true;
        console.log("Ganaste!!!!!");
    }

}

if(intentos == 0 && ganado == false){
    perdido = true;
    console.log("Perdiste");
}







