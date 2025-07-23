
/*
function linkURL(spreadsheetId) {
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getActiveRange();
  var richTextValues = range.getRichTextValues();
  
  var output = [];
  for (var i = 0; i < richTextValues.length; i++) {
    var row = [];
    for (var j = 0; j < richTextValues[0].length; j++) {
      var cellValue = richTextValues[i][j].getLinkUrl() || ''; // Si no hay enlace, se escribe vacío
      row.push(cellValue);
    }
    output.push(row);
  }
  
  return output;
}

// Llama a la función linkURL con el ID de tu hoja de cálculo y muestra los datos en el registro de ejecución
var data = linkURL('1EWgyrm6TRlQzX2k5CgxD6dGmzwFOSSNk6ZuUJA0DLRc');
Logger.log(data);

*/
/*
/** 
 * Returns the URL of a hyperlinked cell, if it's entered with hyperlink command. 
 * Supports ranges
 * @param {A1}  reference Cell reference
 * @customfunction
 */
/*
function linkURL(reference) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var formula = SpreadsheetApp.getActiveRange().getFormula();
  var args = formula.match(/=\w+\((.*)\)/i);
  try {
    var range = sheet.getRange(args[1]);
  }
  catch(e) {
    throw new Error(args[1] + ' is not a valid range');
  }
  var formulas = range.getFormulas();
  var output = [];
  for (var i = 0; i < formulas.length; i++) {
    var row = [];
    for (var j = 0; j < formulas[0].length; j++) {
      var url = formulas[i][j].match(/=hyperlink\("([^"]+)"/i);
      row.push(url ? url[1] : '');
    }
    output.push(row);
  }
  return output
}


*/

/**
 * Returns the URL of a hyperlinked cell, if it's entered with hyperlink command. 
 * Supports ranges
 * @param {A5} reference Cell reference
 * @customfunction
 */
/*
function linkURL(reference) {
  // Obtener el ID de la hoja de cálculo
  var spreadsheetId = 'I1EWgyrm6TRlQzX2k5CgxD6dGmzwFOSSNk6ZuUJA0DLRc'; // Reemplaza 'ID_DE_LA_HOJA_DE_CALCULO' con el ID de tu hoja de cálculo
  
  // Abrir la hoja de cálculo
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
  // Obtener la hoja de cálculo activa
  var sheet = spreadsheet.getActiveSheet();
  
  // Obtener el rango desde la celda de referencia (A5) hasta la última fila
  var range = sheet.getRange(reference + ':A');
  
  // Obtener las fórmulas del rango especificado
  var formulas = range.getFormulas();
  
  // Inicializar un array para almacenar los URL
  var urls = [];
  
  // Iterar sobre las fórmulas del rango
  for (var i = 0; i < formulas.length; i++) {
    // Extraer el URL de la fórmula de hipervínculo si existe
    var match = formulas[i][0].match(/=hyperlink\("([^"]+)"/i);
    var url = match ? match[1] : '';
    // Agregar el URL al array de URLs
    urls.push([url]);
  }
  
  // Colocar los URLs en la columna M a partir de la fila 5
  sheet.getRange('M5:M' + (4 + urls.length)).setValues(urls);
  
  // Retornar los URLs
  return urls;
}

*/

/**
 * Returns the Google Drive link from a cell containing the link.
 * @param {string} reference Cell reference (e.g., "A1").
 * @return {string} The Google Drive link found in the cell.
 * @customfunction
 */
/*function linkURL(reference) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange(reference);
  var value = cell.getValue();
  var driveLinkRegex = /https:\/\/drive\.google\.com\/[^\s]+/;
  var match = value.match(driveLinkRegex);
  if (match) {
    return match[0];
  } else {
    return 'Sin Enlace';
  }
}
*/

function linkURL(input) {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  if (Array.isArray(input)) {
    var output = [];

    for (var i = 0; i < input.length; i++) {
      var value = input[i][0];

      // Buscar la fila donde está el valor
      var found = false;
      for (var row = 1; row <= sheet.getLastRow(); row++) {
        var cellValue = sheet.getRange(row, 1).getValue();
        if (cellValue == value) {
          var richText = sheet.getRange(row, 1).getRichTextValue();
          var url = richText.getLinkUrl();
          output.push([url ? url : '']);
          found = true;
          break;
        }
      }

      if (!found) {
        output.push(['']);
      }
    }

    return output;
  }

  // Si solo es una celda individual
  var cell = sheet.getActiveCell();
  var rich = cell.getRichTextValue();
  return rich ? (rich.getLinkUrl() || '') : '';
}
