document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroRecuperar = document.getElementById('numeroRecuperar').value.trim();
        let pregunta1 = document.getElementById('pregunta1').value.trim();
        let pregunta2 = document.getElementById('pregunta2').value.trim();
        let pregunta3 = document.getElementById('pregunta3').value.trim();

        const modal = document.getElementById('myModal');
        const modalText = document.querySelector('#myModal p');
        const modalButton = document.querySelector('#myModal .btn');
        if (numeroRecuperar === '') {
            modalText.textContent = 'Debes ingresar el número a recuperar.';
            modalButton.style.display = 'none';
            modal.style.display = 'flex';
            return; 
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (pregunta1 !== '' && !emailRegex.test(pregunta1)) {
            
            modalText.textContent = 'Debes ingresar un correo electrónico válido';
            modalButton.style.display = 'none';
            modal.style.display = 'flex';
            return; 
        }

    
        if (pregunta1 === '') {
            pregunta1 = 'No tiene cuenta registrada';
        }

        if (pregunta3 === '') {
            pregunta3 = 'No he llamado';
        }

       
        const textToCopy = `
Número a recuperar: ${numeroRecuperar}

¿Cuál es el correo que está asociado a tu cuenta de APP?
  
${pregunta1}

¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses?
  
${pregunta2}

¿Número al que más llamas con frecuencia?
   
${pregunta3}
        `;

        // Copia el texto al portapapeles
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Muestra el modal indicando que la copia fue exitosa
            modalText.textContent = 'Copiado exitoso!';
            // Mostrar el botón en el modal
            modalButton.style.display = 'block';
            modal.style.display = 'flex';
            
        });
    });

    // Manejador del botón de cerrar del modal
    document.querySelector('.close').addEventListener('click', function() {
        // Oculta el modal
        document.getElementById("myModal").style.display = 'none';
    });
});
