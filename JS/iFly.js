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
const dniInput = document.getElementById('DNI');
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
  
  // Aplicamos la función a los campos
  soloNumeros(vencimientoInput);
  soloNumeros(cvcInput);
  soloNumeros(anioInput);
  soloNumeros(tarjetaInput);


dniInput.addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, ''); // Remueve todos los caracteres que no sean dígitos
});

// Generar un PDF a partir de datosUnPago.html

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioVueloComprado');
    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const dni = document.getElementById('DNI').value;
        const nacionalidad = document.getElementById('nacionalidad').value;
        const email = document.getElementById('email').value;
        const tarjeta = document.getElementById('tarjeta').value;
        const cvc = document.getElementById('CVC').value;
        const vencimiento = document.getElementById('vencimiento').value;
        const anio = document.getElementById('anio').value;
        
        // Generar un número aleatorio para la tarjeta de embarque
        const numeroAleatorio = Math.floor(Math.random() * 10000000000); 

        // Crear un nuevo documento jsPDF
        const doc = new jsPDF();

        // Agregar la información al PDF
        doc.text(20, 20, `Nombres: ${nombres}`);
        doc.text(20, 30, `Apellidos: ${apellidos}`);
        doc.text(20, 40, `DNI: ${dni}`);
        doc.text(20, 50, `Nacionalidad: ${nacionalidad}`);
        doc.text(20, 60, `Correo electrónico: ${email}`);
        doc.text(20, 70, `Número de tarjeta: ${tarjeta}`);
        doc.text(20, 80, `CVC: ${cvc}`);
        doc.text(20, 90, `Vencimiento: ${vencimiento}`);
        doc.text(20, 100, `Año: ${anio}`);
        doc.text(20, 110, `Número de Tarjeta de Embarque: ${numeroAleatorio}`);

        // Descargar el PDF
        doc.save('Datos del cliente.pdf');
    });
});

// Generar un PDF a partir de datosConTarjeta.html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioVueloTarjeta');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const dni = document.getElementById('DNI').value;
        const nacionalidad = document.getElementById('nacionalidad').value;
        const email = document.getElementById('email').value;
        const tarjeta = document.getElementById('tarjeta').value;
        const cvc = document.getElementById('CVC').value;
        const vencimiento = document.getElementById('vencimiento').value;
        const anio = document.getElementById('anio').value;
        const cuotas = document.getElementById('cuotas').value;

        // Generar un número aleatorio para la tarjeta de embarque
        const numeroAleatorio = Math.floor(Math.random() * 10000000000); 

        // Crear un nuevo documento jsPDF
        const doc = new jsPDF();

          // Agregar la información al PDF
          doc.text(20, 20, `Nombres: ${nombres}`);
          doc.text(20, 30, `Apellidos: ${apellidos}`);
          doc.text(20, 40, `DNI: ${dni}`);
          doc.text(20, 50, `Nacionalidad: ${nacionalidad}`);
          doc.text(20, 60, `Correo electrónico: ${email}`);
          doc.text(20, 70, `Número de tarjeta: ${tarjeta}`);
          doc.text(20, 80, `CVC: ${cvc}`);
          doc.text(20, 90, `Mes de vencimiento: ${vencimiento}`);
          doc.text(20, 100, `Año: ${anio}`);
          doc.text(20, 110, `Número de Tarjeta de Embarque: ${numeroAleatorio}`);
          doc.text(20, 120, `Cuotas: ${cuotas}`);
  


        // Descargar el PDF
        doc.save('Datos de financiaciento.pdf');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioVueloMercado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const dni = document.getElementById('DNI').value;
        const nacionalidad = document.getElementById('nacionalidad').value;
        const email = document.getElementById('email').value;
        const alias = document.getElementById('alias').value;
        const tarjeta = document.getElementById('tarjeta').value;

        // Generar un número aleatorio para el alias de Mercadopago
        const numeroAleatorio = Math.floor(Math.random() * 10000000000); // Cambia el rango según tus necesidades

        // Crear un nuevo documento jsPDF
        const doc = new jsPDF();

        // Agregar la información al PDF
        doc.text(20, 20, `Nombres: ${nombres}`);
        doc.text(20, 30, `Apellidos: ${apellidos}`);
        doc.text(20, 40, `DNI: ${dni}`);
        doc.text(20, 50, `Nacionalidad: ${nacionalidad}`);
        doc.text(20, 60, `Correo electrónico: ${email}`);
        doc.text(20, 70, `Alias de Mercadopago: ${alias}`);
        doc.text(20, 80, `CBU de Mercadopago: ${tarjeta}`);
        doc.text(20, 90, `Número Aleatorio: ${numeroAleatorio}`);

        // Descargar el PDF
        doc.save('Datos con mercado.pdf');
    });
});

