let num1 = parseInt(prompt("Ingrese el numero 1: "));
let num2 = parseInt(prompt("Ingrese el numero 2: "));
let num3 = parseInt(prompt("Ingrese el numero 3: "));

if (num1 == (num2 + num3)) 
{
    document.write("La suma de los numeros 2 y 3 son igual al numero 1:");
    document.write(`<br>${num2} + ${num3} = ${num1}`);
}
else if (num2 == (num1 + num3)) 
{
    document.write("La suma de los numeros 1 y 3 son igual al numero 2:");
    document.write(`<br>${num1} + ${num3} = ${num2}`);
}
else if (num3 == (num1 + num2))
{
    document.write("La suma de los numeros 1 y 2 son igual al numero 3:");
    document.write(`<br>${num1} + ${num2} = ${num3}`);
}
else 
    document.write("Ninguno de los números es igual a la suma de los otros dos.");