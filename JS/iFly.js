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
