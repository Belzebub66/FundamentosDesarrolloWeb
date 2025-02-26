// Declaración de un arreglo unidimensional vacío
let arreglo = [];

// Función para procesar la entrada del usuario
function procesarArreglo() {
  // Obtener el valor ingresado
  let input = document.getElementById('arrayInput').value;
  
  // Validar que se haya ingresado algún valor
  if (input.trim() === '') {
    alert('Por favor, ingrese algunos valores separados por comas.');
    return;
  }
  
  // Convertir la cadena en un arreglo, eliminando espacios extra
  arreglo = input.split(',').map(item => item.trim());
  
  // Acceso a elementos:
  // Primer elemento (índice 0) y último elemento (índice longitud - 1)
  let primerElemento = arreglo[0];
  let ultimoElemento = arreglo[arreglo.length - 1];

  // Preparar la salida para mostrar el arreglo completo y elementos individuales
  let salida = `<p><strong>Arreglo completo:</strong> [${arreglo.join(', ')}]</p>`;
  salida += `<p><strong>Primer elemento:</strong> ${primerElemento}</p>`;
  salida += `<p><strong>Último elemento:</strong> ${ultimoElemento}</p>`;

  // Recorrido del arreglo para mostrar cada elemento y su índice
  salida += `<p><strong>Recorrido del arreglo:</strong></p><ul>`;
  for (let i = 0; i < arreglo.length; i++) {
    salida += `<li>Índice ${i}: ${arreglo[i]}</li>`;
  }
  salida += `</ul>`;

  // Mostrar la salida en el elemento con id "resultado"
  document.getElementById('resultado').innerHTML = salida;
}

