let hora = parseFloat(prompt("Ingrese la hora en notacion de 24: "));

if (hora < 0 || hora > 23)
    document.write("Hora inválida. Por favor, ingresa un valor entre 0 y 23.");
else if (hora == 0)
    document.write(`Las ${hora} horas en formato de 12 horas son las 12 am.`);
else if (hora == 12)
    document.write(`Las ${hora} horas en formato de 12 horas son las 12 pm.`);
else if (hora < 12)
    document.write(`Las ${hora} horas en formato de 12 horas son las ${hora} am.`);
else
    document.write(`Las ${hora} horas en formato de 12 horas son las ${hora - 12} pm.`);