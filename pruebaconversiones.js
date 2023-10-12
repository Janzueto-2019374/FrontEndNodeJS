// pruebaconversiones.js

const conversiones = require('./conversiones');
const fs = require('fs');

function ejecutarPruebas() {
  const prueba1 = {
    funcion: 'convertirCaF',
    gradosCelsius: 50,
    resultado: conversiones.convertirCaF(50),
  };

  const prueba2 = {
    funcion: 'convertirKmsMillas',
    kilometros: 150,
    resultado: conversiones.convertirKmsMillas(150),
  };

  // Agregar más pruebas según sea necesario

  const resultados = [prueba1, prueba2];

  const textoResultado = resultados.map((prueba) => {
    return `Prueba función: ${prueba.funcion}\nGrados Centigrados origen: ${prueba.gradosCelsius || prueba.kilometros}\nResultado: ${prueba.resultado}\n-------`;
  }).join('\n');

  fs.writeFileSync('pruebaconversiones.txt', textoResultado);
}

ejecutarPruebas();
