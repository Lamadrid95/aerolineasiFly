// @ts-nocheck
document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/DOC/aeropuertos.txt')
        .then(response => response.text())
        .then(data => {
            const aeropuertos = data.split('\n');
            const selectOrigen = document.getElementById('aeropuertoOrigen');
            const selectDestino = document.getElementById('aeropuertoDestino');

            aeropuertos.forEach(aeropuerto => {
                const optionOrigen = document.createElement('option');
                optionOrigen.text = aeropuerto;
                const optionDestino = document.createElement('option');
                optionDestino.text = aeropuerto;
                // @ts-ignore
                selectOrigen.add(optionOrigen);
                // @ts-ignore
                selectDestino.add(optionDestino);
            });
        });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const selectOption = document.getElementById('opcion');

    // @ts-ignore
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // @ts-ignore
        const selectedOption = selectOption.value;

        if (selectedOption === 'ninguna') {
            window.location.href = '/datosUnPago.html';
        } else if (selectedOption === 'mercadoCredito') {
            window.location.href = '/datosConMercado.html';
        } else if (selectedOption === 'cuotas') {
            window.location.href = '/datosConTarjeta.html';
        }
    });
});

// Seleccionar los campos
const vencimientoInput = document.getElementById('vencimiento');
const cvcInput = document.getElementById('CVC');
const anioInput = document.getElementById('anio');
const tarjetaInput = document.getElementById('tarjeta');
const nombresInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const nacionalidadInput = document.getElementById('nacionalidad');

const soloLetras = /^[A-Za-z\s]+$/; // Expresión regular que solo permite letras y espacios

// Aquí le hacemos a cada uno
nombresInput.addEventListener('input', function(event) {
    if (!soloLetras.test(this.value)) {
        this.value = this.value.replace(/[^A-Za-z\s]+/g, '');
    }
});

apellidosInput.addEventListener('input', function(event) {
    if (!soloLetras.test(this.value)) {
        this.value = this.value.replace(/[^A-Za-z\s]+/g, '');
    }
});

nacionalidadInput.addEventListener('input', function(event) {
    if (!soloLetras.test(this.value)) {
        this.value = this.value.replace(/[^A-Za-z\s]+/g, '');
    }
});

function soloNumeros(input) {
    input.addEventListener('keydown', function(event) {
      // Permitir solo teclas de números y teclas de control (como 'Backspace', 'Tab', 'Delete', etc.)
      if (!((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106) || [8, 9, 13, 27, 37, 39].includes(event.keyCode))) {
        event.preventDefault();
      }
    });
  }
  
  // Aplicar la función a los campos
  soloNumeros(vencimientoInput);
  soloNumeros(cvcInput);
  soloNumeros(anioInput);
  soloNumeros(tarjetaInput);
  

  // DNI
  const dniInput = document.getElementById('DNI');

dniInput.addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, ''); // Remueve todos los caracteres que no sean dígitos
});
