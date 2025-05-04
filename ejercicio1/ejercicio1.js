let num1 = parseInt(prompt("Ingrese el numero 1: "));
let num2 = parseInt(prompt("Ingrese el numero 2: "));
let num3 = parseInt(prompt("Ingrese el numero 3: "));

if (num1 > 0)
{
    let producto = num2 * num3;
    document.write(`El producto de los numero ${num2} x ${num3} es = ${producto}`);
}
else
{
    let suma = num2 + num3;
    document.write(`La suma de los numeros ${num2} + ${num3} es = ${suma}`);
}