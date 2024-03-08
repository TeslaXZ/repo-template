document.querySelector('form').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe (comportamiento predeterminado)
    event.preventDefault();
  
    // Recoge los valores seleccionados
    var numeroRecuperar = document.querySelector('input[name="numeroRecuperar"]').value;
    var sms = document.querySelector('input[name="pregunta1"]:checked');
    var combo = document.querySelector('select[name="pregunta2"]').value;
    var numeroFrecuente = document.querySelector('input[name="pregunta3"]').value;
    
   
    if ( numeroRecuperar === "") {
        alert('Tienes que ingresar un número a recuperar.');
        return;
      }

      // Comprueba si se seleccionó una opción para SMS
      if ( sms === null) {
        alert('Tienes que seleccionar una de las dos opciones para SMS.');
        return;
      }else{
        sms.value
      }
    if (numeroFrecuente === '') {
      numeroFrecuente = 'No he llamado';
    }
  
    // Crea la cadena de texto a copiar
    var textoACopiar = 'Número: '  + numeroRecuperar + '\n' +
                       '¿Has enviado SMS este mes❓ ' + '\n' + (sms === 'Si' ? '👉 b) Sí' : '👉 a) No ❌') + '\n' +
                       '🔒 ¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses❓ 👉 '+ '\n' + combo + '\n' +
                       '🔒 ¿Número al que más llamas con frecuencia❓ 👉 '+ '\n' + numeroFrecuente;
  
    // Crea un elemento textarea temporal, establece su valor en el texto a copiar y añádelo al documento
    var textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = textoACopiar;
    document.body.appendChild(textareaTemporal);
  
    // Selecciona el texto del textarea temporal y copia el texto al portapapeles
    textareaTemporal.select();
    document.execCommand('copy');
  
    // Elimina el textarea temporal
    document.body.removeChild(textareaTemporal);
  });
  