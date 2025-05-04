let cadenas = [];
let inverso = [];

//asigna los valores al vector cadenas
for (let i = 0; i < 5; i++)
    cadenas[i] = prompt(`Ingrese una palabra en la posicion ${i+1}: `);


document.write("Vector original:<br>");
document.write("[");

for (let i = 0; i < cadenas.length; i++)
    document.write(cadenas[i] + ",");

document.write("]");

//asigna los valores del vector de forma invertida
for (let i = 0; i < 5; i++)
    inverso[4-i] = cadenas[i]; 


document.write("<br><br>Vector invertido:<br>");
document.write("[");
for (let i = 0; i < cadenas.length; i++)
    document.write(inverso[i] + ",");

document.write("]");