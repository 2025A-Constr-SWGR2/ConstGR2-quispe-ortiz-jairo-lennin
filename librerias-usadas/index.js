// MODIFICADO PARA EL EXAMEN.
// Autores: Jairo Quispe y René Guzmán.

const moduloSuma = require('2025a-swgr2-jq-rg-suma');
const moduloResta = require('2025a-swgr2-jq-rg-resta');
const moduloMultiplicacion = require('2025a-swgr2-jq-rg-multiplicacion');
const moduloDivision = require('2025a-swgr2-jq-rg-division');

const resultadoSuma = moduloSuma.suma(2, 1);
const resultadoResta = moduloResta.resta(3, 2);
const resultadoMultiplicacion = moduloMultiplicacion.multiplicacion(2, 5);
const resultadoDivision = moduloDivision.division(9, 3);

console.log('Resultado suma:', resultadoSuma); // Resultado suma: 3
console.log('Resultado resta:', resultadoResta); // Resultado resta: 1
console.log('Resultado multiplicación:', resultadoMultiplicacion); // Resultado multiplicación: 10
console.log('Resultado división:', resultadoDivision); // Resultado división: 3

