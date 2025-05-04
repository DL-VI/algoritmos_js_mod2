let matriz = [];
let fila, columna, suma;

//asigna los valores a la matriz
for (fila = 0; fila < 3; fila++)
{
    matriz[fila] = [];
    for (columna = 0; columna < 4; columna++)
        matriz[fila][columna] = parseFloat(prompt(`Ingrese el valor en la fila ${fila + 1} y columna ${columna + 1}: `));
}

document.write("<br>Matriz 3x4:<br>");
document.write("[<br>");
for (fila = 0; fila < 3; fila++)
{
    document.write("[");
    for (columna = 0; columna < 4; columna++)
        document.write(matriz[fila][columna] + ",");
    
    document.write("],");
    document.write("<br>");
}
document.write("]");
    
document.write("<br><br>Filas:<br>");
for (fila = 0; fila < 3; fila++)
{
    suma = 0;
    for (columna = 0; columna < 4; columna++)
        suma += matriz[fila][columna];

    document.write(`La suma de la fila ${fila + 1} es: ${suma}<br>`);
}

document.write("<br>Columnas:<br>");
for (columna = 0; columna < 4; columna++)
{
    suma = 0;
    for (fila = 0; fila < 3; fila++)
        suma += matriz[fila][columna];

    document.write(`La suma de la columna ${columna + 1} es: ${suma}<br>`);
}