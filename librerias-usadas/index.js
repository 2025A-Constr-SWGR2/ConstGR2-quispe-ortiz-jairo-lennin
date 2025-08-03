const moduloSuma = require('2025a-swgr2-jq-rg-suma');
const moduloResta = require('2025a-swgr2-jq-rg-resta');
const moduloMultiplicacion = require('2025a-swgr2-jq-rg-multiplicacion');
const moduloDivision = require('2025a-swgr2-jq-rg-division');

const resultadoSuma = moduloSuma.suma(1, 4);
const resultadoResta = moduloResta.resta(9, 2);
const resultadoMultiplicacion = moduloMultiplicacion.multiplicacion(5, 3);
const resultadoDivision = moduloDivision.division(6, 2);

console.log('Resultado suma:', resultadoSuma); // Resultado suma: 5
console.log('Resultado resta:', resultadoResta); // Resultado resta: 7
console.log('Resultado multiplicación:', resultadoMultiplicacion); // Resultado multiplicación: 15
console.log('Resultado división:', resultadoDivision); // Resultado división: 3

