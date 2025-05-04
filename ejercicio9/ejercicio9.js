let vectorNotas = [];
let contador = 0, suma = 0, nota, promedio, mayor, menor;

while (contador < 5)
{
    nota = parseFloat(prompt(`Ingrese la nota entre 0 y 10.\nIngrese la nota ${contador + 1}:`))

    if (nota >= 0 && nota <= 10)
    {
        vectorNotas[contador] = nota;
        suma += nota;
        contador++;
    }    
    else alert("Nota incorrecta, intente nuevamente.");
}

document.write("Notas del alumno: <br>");
document.write("[");
for (let i = 0; i < vectorNotas.length; i++)
    document.write(vectorNotas[i] + ",");

document.write("]");

//promedio de notas
promedio = suma / vectorNotas.length;

//asignamos el tamaño del 
mayor = vectorNotas[0];
menor = vectorNotas[0];

//nota mayor
for (let i = 1; i < vectorNotas.length; i++)
    if (mayor < vectorNotas[i])
        mayor = vectorNotas[i];

//nota menor
for (let i = 1; i < vectorNotas.length; i++)
    if (menor > vectorNotas[i])
        menor = vectorNotas[i];


document.write(`<br><br>El promedio de las notas del alumno es: ${promedio}`);
document.write(`<br>La nota mayor del alumno es: ${mayor}`);
document.write(`<br>La nota menor del alumno es: ${menor}`);