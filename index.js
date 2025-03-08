
let num1 = parseInt(prompt("Ingrese un numero: ")); 
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));


if (num1 === num2 && num1 === num3) {
    console.log("Los tres numeros son iguales: ", num1, num2, num3); 
} else {
    let numeros = [num1, num2, num3];
    let mayor = [...numeros].sort((a, b) => b - a);    
    let menor = [...numeros].sort((a, b) => a - b);
    
    console.log("Los numeros de mayor a menor son: ", mayor.join(", "));
    console.log("Los numeros de menor a mayor son: ", menor.join(", "));
    
}
