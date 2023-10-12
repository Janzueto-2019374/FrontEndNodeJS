// conversiones.js

function convertirCaF(gradosCelsius) {
  const gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  return gradosFahrenheit;
}

function convertirKmsMillas(kilometros) {
  const millas = kilometros * 0.621371;
  return millas;
}

function convertirKgLibras(kilogramos) {
  const libras = kilogramos * 2.20462;
  return libras;
}

function convertirPulgadasCm(pulgadas) {
  const centimetros = pulgadas * 2.54;
  return centimetros;
}

function convertirPiesPulgadas(pies) {
  const pulgadas = pies * 12;
  return pulgadas;
}

module.exports = {
  convertirCaF,
  convertirKmsMillas,
  convertirKgLibras,
  convertirPulgadasCm,
  convertirPiesPulgadas,
};
