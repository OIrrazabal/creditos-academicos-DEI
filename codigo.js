// Código en la biblioteca
function buscarCreditos(matricula) {
  var resultado = gestionCreditosDEI.buscarCreditos(matricula);
  return resultado;
}

function buscarCreditosPorApellido(apellido) {
  var resultado = gestionCreditosDEI.buscarCreditosPorApellido(apellido);
  return resultado;
}

// Código en el script principal
function llamarBuscarCreditos(matricula) {
  var resultado = buscarCreditos(matricula);
  // Hacer algo con el resultado, como mostrarlo en una página web o registrarlo en una hoja de cálculo
  // ...
}

function llamarBuscarCreditosPorApellido(apellido) {
  var resultado = buscarCreditosPorApellido(apellido);
  // Hacer algo con el resultado, como mostrarlo en una página web o registrarlo en una hoja de cálculo
  // ...
}

function doGet() {
  var template = HtmlService.createTemplateFromFile('Page');
  return template.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

