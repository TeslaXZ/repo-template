document.querySelector('form').addEventListener('submit', function(event) {
  // Evita que el formulario se envíe (comportamiento predeterminado)
  event.preventDefault();

  // Recoge los valores seleccionados
  var numeroRecuperar = document.querySelector('input[name="numeroRecuperar"]').value;
  var sms = document.querySelector('input[name="pregunta1"]:checked');
  var combo = document.querySelector('select[name="pregunta2"]').value;
  var numeroFrecuente = document.querySelector('input[name="pregunta3"]').value;
  
  // Comprueba si se ingresó un número a recuperar
  if (numeroRecuperar === "") {
      alert('Tienes que ingresar un número a recuperar.');
      return;
  }

  // Comprueba si se seleccionó una opción para SMS
  if (sms === null) {
      alert('Tienes que seleccionar una de las dos opciones para SMS.');
      return;
  }

  // Comprueba si se ha seleccionado "Si" o "No" para SMS
  var smsValue = sms.value === 'Si' ? ' b) Si' : ' a) No';

  // Si no se ingresa un número frecuente, establece un valor predeterminado
  if (numeroFrecuente === '') {
      numeroFrecuente = 'No he llamado';
  }

  // Crea la cadena de texto a copiar
  var textoACopiar = 'Número: '  + numeroRecuperar + '\n' +
                     '¿Has enviado SMS este mes❓ ' + '\n' + smsValue + '\n' +'\n' +
                     '🔒 ¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses❓ '+ '\n' + combo + '\n' +'\n' +
                     '🔒 ¿Número al que más llamas con frecuencia❓ '+ '\n' + numeroFrecuente;

  // Crea un elemento textarea temporal, establece su valor en el texto a copiar y añádelo al documento
  var textareaTemporal = document.createElement('textarea');
  textareaTemporal.value = textoACopiar;
  document.body.appendChild(textareaTemporal);

  // Selecciona el texto del textarea temporal y copia el texto al portapapeles
  textareaTemporal.select();
  document.execCommand('copy');

  // Elimina el textarea temporal
  document.body.removeChild(textareaTemporal);

  // Mostrar el modal
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";
  modal.style.alignItems="center";

  // Cerrar el modal cuando se haga clic en la "x"
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
      modal.style.display = "none";
  }
});
