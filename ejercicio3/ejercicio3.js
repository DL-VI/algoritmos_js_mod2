let suma = 0;
let contador = 0;

document.write("Los primeros 5 multiplos de 3 son: <br>");
for (let i = 0; i <= 100; i++)
{
    if (i % 3 == 0 && i !== 0)
    {
        suma += i;
        if (contador < 5)
        {
            document.write(i + ",");
            contador++;
        }
    }
}

document.write(`<br><br>La suma de los multiplos de 3 hasta 100 es: ${suma}.`);