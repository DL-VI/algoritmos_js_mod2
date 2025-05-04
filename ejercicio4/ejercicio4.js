let exponente = 0;
let potencia = 1;

document.write("Las potencias de 2 menores o iguales que 100 son: <br>");
while (potencia <= 100) 
{   
    document.write(`2 ^ ${exponente} = ${potencia}<br>`);
    potencia *= 2;
    exponente++; 
}