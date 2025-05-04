let suma = 0;

for (let i = 50; i <= 200; i++) 
    if (i % 2 == 0)
        suma += i;

document.write(`La suma de los numeros pares entre 50 y 200 es: ${suma}`);